'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { usePathname } from "next/navigation";

  export default async function Roundination(){
    const pathname = usePathname();
    const currentRound = pathname.split('/').pop();

    return(

     <Pagination>
        <PaginationContent>
            <PaginationItem>
            <PaginationLink href="/team/wc" isActive={currentRound === 'wc'}>WC</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/div" isActive={currentRound === 'div'}>DIV</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/con" isActive={currentRound === 'con'}>CON</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/sb" isActive={currentRound === 'sb'}>SB</PaginationLink>
            </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }