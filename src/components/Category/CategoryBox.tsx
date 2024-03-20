import { cn } from '@/lib/util'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface CategoryBox {
  icon:IconType,
  label:string,
  path:string,
  selected:boolean
}

const CategoryBox = ({
  icon:Icon,
  label,
  path,
  selected,
}:CategoryBox) => {
  return (
    <Link
      href={`/?category=${path}`}
      className={cn('flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer w-full',
        selected?"border-b-neutral-800 text-neutral-800":"border-b-transparent text-neutral-500"
      )}
    >
      <Icon size={26}/>
      <div className='
        mobile:text-sm
        whitespace-nowrap
      '>
        {label}
      </div>
    </Link>
  )
}

export default CategoryBox