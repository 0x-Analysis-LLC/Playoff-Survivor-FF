'use client';
import React, { useEffect, useState } from 'react';
import { PlayerTable } from '@/components/data/data-table';
import { Player } from '@/components/data/columns';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';


const PositionationNoSSR = dynamic(
    () => import('../menus/positionation'), 
    { ssr: false }
  );


export default function DraftWindow() {
    const [playersState, setPlayersState] = useState<Player[]>([]);
    const pathname = usePathname();
    const [currentPosition, setCurrentPosition] = useState('qb');


    useEffect(() => {
        const pathPosition = pathname.split('/').pop();
        if (pathPosition) {
            setCurrentPosition(pathPosition);
        }

        async function fetchPlayersFromApi(currentPosition: string) {
            try {
                const response = await fetch(`/api/draft?position=${currentPosition}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const players: Player[] = await response.json();
                setPlayersState(players);
            } catch (error) {
                console.error('Failed to fetch players:', error);
            }
        }

        fetchPlayersFromApi(currentPosition);
    }, [currentPosition, pathname]);

    const handleSelect = (id: number) => {
        setPlayersState(playersState.map((player) =>
            player.id === id ? { ...player, isSelected: !player.isSelected } : player
        ));
    };

    return (
        <div className="h-full md:w-3/5 p-4 flex justify-center">
            <Card className="h-5/6 w-4/5 md:w-full md:h-full flex flex-col justify-between text-center bg-muted">
                <CardHeader className="mb-4 text-large md:text-3xl">
                    <CardTitle className='text-muted-foreground'>
                        <span className='me-4 mb-2'>Draft</span>
                        <span>Board</span>
                    <PositionationNoSSR currentPosition={currentPosition}/>
                    </CardTitle>
                </CardHeader>
                
                <ScrollArea className="max-h-[60vh] w-full rounded-md border p-4 overflow-auto flex-1 bg-secondary">
                        <PlayerTable data={playersState} onSelect={handleSelect} />
                </ScrollArea>
                <CardFooter className="mt-4 flex justify-center text-muted-foreground">
                    <p>0x Analysis</p>
                </CardFooter>
            </Card>
        </div>
    );
}
