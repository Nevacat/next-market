import { cn } from '@/lib/util'
import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  text: string
  onClick: () => void
  icon?: IconType
  dark?: boolean
  disabled?: boolean
  sm?: boolean
}

const Button = ({
  text,
  onClick,
  icon:Icon,
  dark,
  disabled,
  sm
}:ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn("relative w-full font-semibold disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 border-2 ", dark ?"bg-white border-black text-black" :"bg-black border-black text-white", sm ? "px-4 py-2 text-sm" : "px-6 py-3 text-lg")}
    >
      {text}
    </button>
  )
}

export default Button