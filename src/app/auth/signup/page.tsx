'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Signup = () => {
  const [loading,setIsLoading] = useState(false)
  const router = useRouter()
  const {register,handleSubmit,formState:{
    errors
  }} = useForm<FieldValues>()

  const onSubmit:SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true)
    try {
      const res = await axios.post('/api/register',body)
      if(res.data.status === 400){
        toast.error('이미 존재하는 이메일입니다.')
        throw new Error('이미 존재하는 이메일입니다.')
      }
      toast.success('회원가입이 완료되었습니다.')
      router.push('/auth/login')
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <section className="h-[calc(100vh_-_56px)] w-full flex justify-center items-center">
      <form className='min-w-[350px] flex flex-col gap-4'>
        <h1>회원가입</h1>
        <Input type="text" id="email" label='Email' register={register} errors={errors}/>
        <Input type="text" id="name" label='Name' register={register} errors={errors}/>
        <Input type="password" id="password" label='Password' register={register} errors={errors}/>
        <Button text='회원가입' disabled={loading} onClick={handleSubmit(onSubmit)}/>
        <div className='flex w-full justify-center'>
          <p className='text-zinc-400'>이미 계정이 있으신가요?</p>
          <Link href='/auth/login' className='hover:underline' >로그인</Link>
        </div>
      </form>
    </section>
  )
}

export default Signup