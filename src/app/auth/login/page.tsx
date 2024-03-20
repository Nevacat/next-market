'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [isLoading,setIsLoading] = useState(false)
  const {register,handleSubmit,formState:{
    errors
  }}=useForm<FieldValues>({
    defaultValues:{
      email:'',
      password:''
    }
  })

  const onSubmit:SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true)
    try{
      const res = await signIn('credentials',{
        redirect:false,
        email:body.email,
        password:body.password
      })
      if(res?.status === 401){
        toast.error('로그인 실패')
        throw new Error('로그인 실패')
      }
      toast.success('로그인 성공')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <section className="h-[calc(100vh_-_56px)] flex justify-center items-center">
      <form className="flex flex-col justify-center gap-4 min-w-[350px]"> 
        <h1 className='text-2xl'>시작하기</h1>
        <Input type='text' label='Email' id='email' required={true} errors={errors} register={register}/>
        <Input type='password' label='Password' id='password' required={true} errors={errors} register={register}/>
        <Button text='로그인' disabled={isLoading} onClick={handleSubmit(onSubmit)}/>
        <div className='flex w-full justify-center'>
          <p className='text-zinc-400'>아직 회원이 아니신가요?</p>
          <Link className='hover:underline'  href='/auth/signup' >회원가입</Link>
        </div>
      </form>
    </section>
  )
}

export default LoginPage