import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server'
import { NflTeam } from "@prisma/client";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to determine the current playoff round
export function getCurrentRound(): string | null {
  const currentDate = new Date();
  // Example logic based on specific dates
  // Update these dates according to your playoff schedule
  const rounds = [
    { start: new Date('2024-01-08T08:00:00-05:00'), end: new Date('2024-01-13T16:29:59-05:00'), round: 'draft' },//Draft
    { start: new Date('2024-01-13T16:30:00-05:00'), end: new Date('2024-01-17T04:00:00-05:00'), round: 'wc' }, // Wildcard round
    { start: new Date('2024-01-17T04:01:00-05:00'), end: new Date('2024-01-24T04:00:00-05:00'), round: 'div' }, // Divisional round
    { start: new Date('2024-01-24T04:01:00-05:00'), end: new Date('2024-01-31T04:00:00-05:00'), round: 'conf' }, // Conference Championship
    { start: new Date('2024-01-31T04:01:00-05:00'), end: new Date('2024-02-13'), round: 'sb' } // Super Bowl
  ];

  for (const { start, end, round } of rounds) {
    if (currentDate >= start && currentDate <= end) {
      return round;
    }
  }

  return null; // Return null if no round matches
}


export async function processPlayoffs(data: any) {

  const order = data.currentRound;
  const rounds = data.rounds;
  const games = rounds[order-1].blocks;

  for (const game of games) {
    const participants = game.participants;
    const finished = game.finished;
    const gameTime = new Date(game.seriesStartDateTimestamp * 1000).toLocaleString("en-US", {timeZone: "America/New_York"});
    const gameDay = gameTime.split(',')[0].slice(0, 3).toUpperCase();
    for (const participant of participants){

      const team = await prisma.nflTeam.findUnique({ where: { US_FB_ID: participant.team.id } });
      if (!team)  continue;
      const winner = participant.winner;
      const opponent = participants.find((p:any) => p.team.name !== participant.team.name);
      if (!opponent) continue;
      const gameInfo = `${participant.order === 1 ? '' : '@'}${opponent.team.nameCode}`;
      const eliminated = finished && !winner;

      await prisma.nflTeam.update({
        where: { id: team.id },
        data: { gameInfo, gameTime, eliminated }
      });

    }
  }
  return;
}


export async function seedPlayoffTeams(standings: any[], playoffs_data: any) {
  const round = getCurrentRound();

  if (!round){
    return
  }
 
  const afc = standings.find(standing => standing.name === 'AFC');
  const nfc = standings.find(standing => standing.name === 'NFC');

  const afcTeams = afc.rows.slice(0, 7).map((row: any) => row);
  const nfcTeams = nfc.rows.slice(0, 7).map((row: any) => row);
  const playoffTeams = [...afcTeams, ...nfcTeams];

  const count = await prisma.nflTeam.count();
  if (count > 0) {
    return;
  }

  for (const playoffTeam of playoffTeams) {
    await prisma.nflTeam.create({
      data: {
        name: playoffTeam.team.name,
        shortName: playoffTeam.team.shortName,
        nameCode: playoffTeam.team.nameCode,
        US_FB_ID: playoffTeam.team.id,
        seed: playoffTeam.position
      },
    });
  }
  processPlayoffs(playoffs_data);
  return;
}

export async function seedPlayers(teamId: number, headers: any) {
  const url = `https://americanfootballapi.p.rapidapi.com/api/american-football/team/${teamId}/players`;
  try {
    const response = await fetch(url, { headers });
    const players_data = await response.json();
    const players = players_data.players;

    const positions = ['QB', 'RB', 'RB', 'WR', 'WR', 'WR', 'TE', 'K'];

    for (const player of players) {
      const index = positions.indexOf(player.player.position);
      if (index !== -1) {
        const team = await prisma.nflTeam.findUnique({ where: { US_FB_ID: player.player.team.id } });
        if (team) {
          await prisma.player.create({
            data: {
              playerName: player.player.name,
              position: player.player.position,
              teamId: team.id,
            },
          });
        } else {
          continue;
        }
        positions.splice(index, 1);
      }
      if (positions.length === 0) {
        break;
      }
    }
    return NextResponse.json({ message: 'Players seeded successfully \n'}); 
  }
  catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'API request failed' }), {
      status: 500
    })
  }

}

export async function seedDefenses(team: NflTeam) {
    const defensePlayer = await prisma.player.create({
      data: {
        playerName: `${team.shortName} D/ST`,
        position: 'DEF',
        teamId: team.id,
      },
    });

    await prisma.stats.create({
      data: {
        playerID: defensePlayer.id,
      },
    });
  }





