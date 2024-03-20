'use client'

import previewImage from '@/helper/previewImage'
import uploadImage from '@/helper/upLoader'
import { cn } from '@/lib/util'
import axios from 'axios'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { IoImageOutline } from 'react-icons/io5'
import { RiSendPlaneLine } from 'react-icons/ri'
import useSWRMutation from 'swr/mutation'

interface InputProps {
  receiverId: string;
  currentUserId: string;
}

const sendReq = async (url:string,{arg}:{
  arg:{
    text: string,
    image: string,
    receiverId:string,
    senderId:string
  }
})=>{
  return await axios.post(url,arg).then(res=>res.data)
}



const Input = ({
  receiverId,
  currentUserId
}:InputProps) => {
  const [message, setMessage] = useState('')
  const [image, setImage] = useState<File|null>(null)
  const [imagePreview, setImagePreview] = useState<string|null>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const {trigger,isMutating} = useSWRMutation('/api/chat',sendReq)
  const chooseImage = ()=>{
    imageRef.current?.click()
  }

  const closeImage = ()=>{
    setImage(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const imgUrl = image ? await uploadImage(image) : null
    if(message || imgUrl){
      trigger({
        text:message,
        image:imgUrl,
        receiverId:receiverId,
        senderId:currentUserId
      })
    }
    setMessage('')
    setImage(null)
    setImagePreview(null)
  }
  return (  
    <form onSubmit={handleSubmit} className={cn('relative flex items-center')}>
      {
        imagePreview && (
          <div className='absolute right-8 w-full overflow-hidden rounded-md bottom-[2.2rem] max-w-[300px] shadow-md'>
            <Image src={imagePreview} width={300} height={300} alt='image preview'/>
            <span onClick={closeImage} className='absolute flex item-center justify-center p-2 text-lg text-white bg-gray-900 cursor-pointer top-[0.4rem] right-[0.4rem] rounded-full opacity-60 hover:opacity-100'>
              <CgClose/>
            </span>
          </div>
        )
      }
      <input type='text' disabled={isMutating} className='w-full h-full text-base outline-none px-2' placeholder='메세지를 입력하세요.' onChange={(e)=>setMessage(e.target.value)} value={message} />
      <input type="file" className='hidden' disabled={isMutating} ref={imageRef} multiple={false} onChange={(e)=>previewImage(e,setImagePreview,setImage)} accept='image/*'/>
      <div className='flex items-center justify-center p-2 text-white bg-black rounded-lg cursor-pointer hover:opacity-70 disabled:opacity-50' onClick={chooseImage}>
        <IoImageOutline/>
      </div>
      <button type='submit' disabled={isMutating} className='flex items-center justify-center p-2 text-white bg-black rounded-lg cursor-pointer hover:opacity-70 disabled:opacity-50'>
        <RiSendPlaneLine className=''/>
      </button>
    </form>
  )
}

export default Input