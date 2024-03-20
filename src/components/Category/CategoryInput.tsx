import { cn } from '@/lib/util'
import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps{
  icon : IconType
  label: string
  selected: boolean
  onClick:(value:string)=>void
  path: string
}

const CategoryInput = ({
  icon:Icon,
  label,
  selected,
  onClick,
  path
}:CategoryInputProps) => {
  return (
    <div
      onClick={()=>onClick(path)}
      className={
        cn("rounded-xl border-2 p-4 flex-col gap-3 hover:border-black transition cursor-pointer",selected?"border-black":"border-neutral-200")
      }
    >
      <Icon size={30}/>
      <div className='font-semibold'>{label}</div>
    </div>
  )
}

export default CategoryInput