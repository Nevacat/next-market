'use client'
import usePagination from '@lucasmogari/react-pagination'
import React from 'react'
import PaginationLink from './PaginationLink'
import { PER_PAGE } from '@/constant'
interface PaginationProps{
  totalItems:number
  page?:number
}
const Pagination = ({
  totalItems,
  page=1,
}:PaginationProps) => {

  const {fromItem,toItem, getPageItem, totalPages} = usePagination({
    totalItems,
    page,
    itemsPerPage:PER_PAGE,
    maxPageItems:5,
  })

  const firstPage = 1
  const nextPage = Math.min(page + 1, totalPages)
  const previousPage = Math.max(page - 1, firstPage)

  const arr = new Array(totalPages + 2)
  return (
    <div>
      {
        [...arr].map((_,index)=>{
          const {page,disabled,current} = getPageItem(index)
          if(page === 'previous') {
            return (<PaginationLink page={previousPage} disabled={disabled} active={current} key={index}>{"<"}</PaginationLink>)
          }

          if(page === 'next') {
            return <PaginationLink page={nextPage} disabled={disabled} active={current} key={index}>{">"}</PaginationLink>;
          }
          if(page === 'gap') {
            return <PaginationLink key={index}>{"..."}</PaginationLink>;            
          }
          return (<PaginationLink page={page} active={current} key={index}>{page}</PaginationLink>)
        })
      }
    </div>
  )
}

export default Pagination