'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const LoginPage = () => {

  const {register,handleSubmit,formState:{
    errors
  }}=useForm<FieldValues>({
    defaultValues:{
      email:'',
      password:''
    }
  })
  return (
    <section className="h-[calc(100vh_-_56px)] flex justify-center items-center">
      <form className="flex flex-col justify-center gap-4 min-w-[350px]"> 
        <h1 className='text-2xl'>시작하기</h1>
        <Input type='text' label='Email' id='id' required={true} errors={errors} register={register}/>
        <Input type='password' label='Password' id='password' required={true} errors={errors} register={register}/>
        <Button text='로그인' onClick={handleSubmit((data)=>console.log(data))}/>
        <div className='flex w-full justify-center'>
          <p className='text-zinc-400'>아직 회원이 아니신가요?</p>
          <Link className='hover:decoration-slice' href='/auth/signup'>회원가입</Link>
        </div>
      </form>
    </section>
  )
}

export default LoginPage