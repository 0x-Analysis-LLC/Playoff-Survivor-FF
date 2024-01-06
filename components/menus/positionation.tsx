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

  export default async function Positionation(){
    const pathname = usePathname();
    const currentPosition = pathname.split('/').pop();

    return(
     <Pagination>
        <PaginationContent>
            <PaginationItem>
            <PaginationLink href="/team/draft/qb" isActive={currentPosition === 'qb'}>QB</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/rb" isActive={currentPosition === 'rb'}>RB</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/wr" isActive={currentPosition === 'wr'}>WR</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/te" isActive={currentPosition === 'te'}>TE</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/flx" isActive={currentPosition === 'flx'}>FLX</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/def" isActive={currentPosition === 'def'}>DEF</PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="/team/draft/k" isActive={currentPosition === 'k'}>K</PaginationLink>
            </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }