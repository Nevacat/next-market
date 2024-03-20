import Link from 'next/link'
import React from 'react'

interface FloatingButtonProps {
  href: string
  children: React.ReactNode
}

const FloatingButton = ({
  href,
  children
}:FloatingButtonProps) => {
  return (
    <Link href={href} className='fixed bottom-5 right-5 w-14 h-14 bg-black flex justify-center items-center rounded-full text-white text-2xl'>
      {children}
    </Link>
  )
}

export default FloatingButton