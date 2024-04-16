import React from 'react'
import Heading from '../Heading'
import { CurrentUser } from '@/app/actions/getCurrentUser'
import Image from 'next/image'
import HeartButton from '../HeartButton'
import { User } from '@prisma/client'

interface ProductHeadProps {
  title: string
  imageSrc: string
  id: string
  likes?: string[]
}

const ProductHead = ({
  title,
  imageSrc,
  id,
  likes
}:ProductHeadProps) => {
  return (
    <>
      <Heading title={title}/>
      <div className='relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-xl'>
        <Image src={imageSrc} alt="상품" fill className="object-cover w-full"/>
        <div className='absolute top-5 right-5'>
          <HeartButton productId={id}/>
        </div>
      </div>
    </>
  )
}

export default ProductHead
