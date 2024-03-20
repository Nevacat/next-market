import { cn } from '@/lib/util'
import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={cn("max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-6")}>{children}</div>
  )
}

export default Container