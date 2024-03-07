import { cn } from '@/lib/util'
import React from 'react'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  type?: string
  label: string
  disabled?: boolean
  required?: boolean
  formatprice?: boolean
  register: UseFormRegister<any>
  errors: FieldErrors
}

const Input = ({
  id,
  type,
  label,
  disabled,
  required,
  register,
  errors,
  formatprice,
}:InputProps) => {
  return (
    <div className="relative w-full">
      {
        formatprice && (
          <span className="">￦</span>
        )
      }
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, {required:required})}
        placeholder=''
        className={cn("w-full outline-none border-2 border-[#535C91] rounded-md p-4 peer disabled:opacity-70 disabled:cursor-not-allowed",formatprice ? "pl-9" : "pl-4", errors![id] && "border-red-500", errors![id] ?"focus:border-rose-500" :"focus:border-[#000fff]" )}
      />
      <label
        htmlFor={id}
        className={cn("absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3")}
      >
        {label}
      </label>
    </div>
  )
}

export default Input