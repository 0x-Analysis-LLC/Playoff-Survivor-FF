import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import { authOptions } from './auth/[...nextauth]/route'
import { seedPlayoffTeams, seedPlayers, seedDefenses } from '@/lib/utils';
import { prisma } from '@/lib/prisma';




export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401
    })
  }








  // const US_FB_API_KEY = process.env.US_FB_API_KEY;
  // const US_FB_API_HOST = process.env.US_FB_API_HOST;

  // if (!US_FB_API_KEY || !US_FB_API_HOST) {
  //   throw new Error('Missing environment variables US_FB_API_KEY or US_FB_API_HOST');
  // }

  // const standings_url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/tournament/9464/season/51361/standings/total';
  // const playoffs_url = 'https://americanfootballapi.p.rapidapi.com/api/american-football/tournament/9464/season/51361/cuptrees';
  // const headers = {
  //   'X-RapidAPI-Key': US_FB_API_KEY,
  //   'X-RapidAPI-Host': US_FB_API_HOST
  // };

  
  
  // try {
  //   const standings_res = await fetch(standings_url, { headers });
  //   const playoffs_res = await fetch(playoffs_url, { headers });
  //   if (!standings_res.ok || !playoffs_res.ok) {
  //     throw new Error(`HTTP error! standings status: ${standings_res.status} \n playoffs status: ${playoffs_res.status}`);
  //   }
  //   const standings_data = await standings_res.json();
  //   const playoffs_data = await playoffs_res.json();
  //   await seedPlayoffTeams(standings_data.standings,playoffs_data.cupTrees[0]);
  //   const allTeams = await prisma.nflTeam.findMany();
    
  //   console.log('Playoff teams seeded successfully! \n', allTeams);

  //   for (const team of allTeams) {
  //     await seedPlayers(team.US_FB_ID, headers);
  //     seedDefenses(team);
  //   }

  //   const allPlayers = await prisma.player.findMany();

  //   console.log('Players seeded successfully! \n', allPlayers);

  //   for(const player of allPlayers){
  //     await prisma.stats.create({
  //       data: {
  //         playerID: player.id
  //       }
  //     });
  //   }
  //   const playerCount = await prisma.player.count();
  //   const statsCount = await prisma.stats.count();
    
  //   if (playerCount === statsCount) {
  //     console.log('Stats seeded successfully!');
  //   } else {
  //     console.log('ERROR: Some players do not have stats.');
  //   }

  // return NextResponse.json({ message: 'Database seeded successfully! \n', allTeams, allPlayers});

  // }catch (error) {
  //   console.error(error);
  //   return new NextResponse(JSON.stringify({ error: 'API request failed' }), {
  //     status: 500
  //   })
  // }



}