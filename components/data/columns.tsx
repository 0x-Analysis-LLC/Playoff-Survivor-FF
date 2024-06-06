 
import { ColumnDef } from "@tanstack/react-table"


export type Player = {
    id: number
    playerName: string
    position: string
    teamShortName: string
    teamSeed: number
    isSelected: boolean
}

export const getColumns = (handleSelect: (id: number) => void): ColumnDef<Player>[] => [
    {
        accessorKey: 'isSelected',
        header: 'Draft',
        cell: ({ row }) => <input type="checkbox" checked={row.original.isSelected} onChange={() => handleSelect(row.original.id)} />,
    },
    {
        accessorKey: 'playerName',
        header: 'Player',
    },
    {
        accessorKey: 'position',
        header: 'Position',
    },
    {
        accessorKey: 'teamShortName',
        header: 'Team',
    },    
    {
        accessorKey: 'teamSeed',
        header: 'Seed',
    }
];

