'use client'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ImageUpload from '@/components/ImageUpload'
import Input from '@/components/Input'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

const ProductUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {register,handleSubmit,setValue,watch,formState:{
    errors
  }} = useForm<FieldValues>({
    defaultValues:{
      name:'',
      description:'',
      price:1,
      imageSrc:'',
      category:'',
      latitude:37.5716,
      longitude:126.9766586,
    }
  })
  const router = useRouter()
  const ImageSrc = watch('imageSrc')
  const Latitude = watch('latitude')
  const Longitude = watch('longitude')
  const KakaoMap = dynamic(()=>import('../../../components/Kakaomap'),{ssr:false})
  const setCustomValue = (id:string,value:any) => {
    setValue(id,value)
  }

  const onSubmit = (data:FieldValues) => {
      setIsLoading(true)
      axios.post('/api/products',data)
      .then(
        res => {
          router.push(`/products/${res.data.id}`)
        }
      ).catch((err)=>{
        console.error(err)
      }).finally(()=>{
        setIsLoading(false);
      })
  }

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <form className='flex flex-col gap-6'>
          <Heading title='상품 업로드' subtitle='상품을 업로드 해주세요.'/>
          <ImageUpload
            onChange={(imageSrc) => {
              setCustomValue('imageSrc',imageSrc)
            }}
            value={ImageSrc}
          />
          <Input id='name' type='text' label='상품명' disabled={isLoading} register={register} errors={errors} required={true}/>
          <Input id='description' type='text' label='상품설명' disabled={isLoading} register={register} errors={errors} required={true}/>
          <Input id='price' type='text' label='가격' formatprice disabled={isLoading} register={register} errors={errors} required={true}/>
          <KakaoMap latitude={Latitude} longitude={Longitude} setCustomValue={setCustomValue} />
          <Button text="업로드" onClick={handleSubmit(onSubmit)}/>
        </form>
      </div>
    </Container>
  )
}

export default ProductUpload