'use client'
import React from 'react'
import Heading from './Heading';
import Button from './Button';
import { useRouter } from 'next/navigation';

interface EmptyStateProps{
  title?:string;
  subtitle?:string;
  showReset?:boolean;
}

const EmptyState = ({
  title="일치하는 상품이 없습니다.",
  subtitle="다른 검색어를 입력해보세요.",
  showReset
}:EmptyStateProps) => {
  const router = useRouter();
  return (
    <div
      className='flex flex-col items-center justify-center h-[60vh] gap-4 text-center'
    >
      <Heading title={title} center subtitle={subtitle}/>
      <div className='w-48 mt-4'>
        <Button dark text='검색 초기화' onClick={()=>router.push("/")}/>
      </div>
    </div>
  )
}

export default EmptyState