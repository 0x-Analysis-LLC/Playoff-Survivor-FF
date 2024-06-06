import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import { seedPlayers, seedPlayoffTeams, seedDefenses } from '@/lib/utils';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()


async function main() {
  const env_email = process.env.SEED_USER_EMAIL;
  const env_username = process.env.SEED_USER_USERNAME;
  const env_password = process.env.SEED_USER_PASSWORD;
  const US_FB_API_KEY = process.env.US_FB_API_KEY;
  const US_FB_API_HOST = process.env.US_FB_API_HOST;

  if (!env_email || !env_username || !env_password || !US_FB_API_KEY || !US_FB_API_HOST) {
    throw new Error('Missing environment variables');
  }

  const password = await hash(env_password,12)
  const user = await prisma.user.upsert({
    where: { email: env_email},
    update: {},
    create: {
      email: env_email,
      username: env_password,
	  password
    },
  })

  const standings_url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/tournament/9464/season/51361/standings/total';
  const playoffs_url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/tournament/9464/season/51361/cuptrees';
  const headers = {
    'X-RapidAPI-Key': US_FB_API_KEY,
    'X-RapidAPI-Host': US_FB_API_HOST
  };

  
  
  try {
    const standings_res = await fetch(standings_url, { headers });
    const playoffs_res = await fetch(playoffs_url, { headers });
    if (!standings_res.ok || !playoffs_res.ok) {
      throw new Error(`HTTP error! standings status: ${standings_res.status} \n playoffs status: ${playoffs_res.status}`);
    }
    const standings_data = await standings_res.json();
    const playoffs_data = await playoffs_res.json();
    await seedPlayoffTeams(standings_data.standings,playoffs_data.cupTrees[0]);
    const allTeams = await prisma.nflTeam.findMany();
    
    console.log('Playoff teams seeded successfully! \n', allTeams);


    for (const team of allTeams) {
      await seedPlayers(team.US_FB_ID, headers);
      seedDefenses(team);
    }

    const allPlayers = await prisma.player.findMany();


    console.log('Players seeded successfully! \n', allPlayers);

    for(const player of allPlayers){
      await prisma.stats.create({
        data: {
          playerID: player.id
        }
      });
    }
    const playerCount = await prisma.player.count();
    const statsCount = await prisma.stats.count();
    
    if (playerCount === statsCount) {
      console.log('Stats seeded successfully!');
    } else {
      console.log('ERROR: Some players do not have stats.');
    }

  return NextResponse.json({ message: 'Database seeded successfully! \n', allTeams, allPlayers});
  }catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'API request failed' }), {
      status: 500
    })
  }

  
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



  