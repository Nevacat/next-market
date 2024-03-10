import { cn } from '@/lib/util'
import React from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

const Heading = ({
  title,
  subtitle,
  center
}:HeadingProps) => {
  return (
    <div className={cn(center?"text-center":"text-left")}>
      <div className='text-2xl font-bold'>{title}</div>
      <div className='mt-2 font-light text-neutral-500'>{subtitle}</div>
    </div>
  )
}

export default Heading