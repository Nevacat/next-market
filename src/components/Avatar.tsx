import { DEFAULT_IMAGE } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Avatar = ({
  src
}:{src:string|null}) => {
  return (
    <Image
      className='w-10 h-10 rounded-full'
      height={30}
      width={30}
      alt='프로필 이미지'
      src={src||DEFAULT_IMAGE}
    />
  )
}

export default Avatar