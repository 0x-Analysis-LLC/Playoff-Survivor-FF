
import { Player } from '@/components/data/columns';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server'

export async function fetchPlayers(position?: string): Promise<Player[]> {

    let queryCondition = {};
    if (position === 'FLX') {
        queryCondition = {
            position: {
                in: ['RB', 'WR', 'TE'],
            },
        };
    } else if (position) {
        queryCondition = { position: position };
    }


    const players = await prisma.player.findMany({
        where:  queryCondition,
        include: {
            team: true,
        },
    });
    return players.map(player => ({
        id: player.id,
        playerName: player.playerName,
        position: player.position,
        teamShortName: player.team.nameCode,
        teamSeed: player.team.seed,
        isSelected: false
    }));
}


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const currentPosition = req.nextUrl.searchParams.get('position')?.toUpperCase();
        const players = await fetchPlayers(currentPosition ?? undefined);
        console.log('Fetched players:', players);
        return new NextResponse(JSON.stringify(players), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Failed to fetch players:', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch players' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
