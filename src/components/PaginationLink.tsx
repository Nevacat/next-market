'use client'

import React, { PropsWithChildren } from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import queryString from 'query-string';
import { PER_PAGE } from '@/constant';

type PaginationLinkProps = {
    page?: number;
    disabled?: boolean;
    active?: boolean;
} & PropsWithChildren

const PaginationLink = ({ page, disabled, active, children }: PaginationLinkProps) => {
    const params = useSearchParams();
    const limit = PER_PAGE;
    const skip = page ? (Number(page) - 1) * limit : 0; 

    let currentQuery = {};
    if(params) {
        currentQuery = queryString.parse(params?.toString())
    }
    const updatedQuery = {
        ...currentQuery, 
        page,
        skip
    }

  return (
    <Link 
      href={{ query: updatedQuery }} 
      className={`p-2 text-xl 
      ${active ? "font-bold text-black" :""}
      ${disabled ? "pointer-events-none text-gray-200" : ""}
      `}
    >{children}</Link>
  )
}

export default PaginationLink