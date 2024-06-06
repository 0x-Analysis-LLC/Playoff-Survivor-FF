"use client";

import { PlayerTable } from '@/components/data/data-table';
import { Player } from '@/components/data/columns';
import React, { useEffect, useState } from 'react';

export default function TestPage() {
    const [playersState, setPlayersState] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlayersFromApi() {
            try {
                const response = await fetch('/api/draft');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const players: Player[] = await response.json();
                setPlayersState(players);
            } catch (error) {
                console.error('Failed to fetch players:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchPlayersFromApi();
    }, []);

    const handleSelect = (id: number) => {
        setPlayersState(playersState.map((player) => 
            player.id === id ? { ...player, isSelected: !player.isSelected } : player
        ));
    };

    return (
        <div>
            <PlayerTable data={playersState} onSelect={handleSelect} />
        </div>
    );
}

