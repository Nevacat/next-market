import React from 'react'
import Heading from '../Heading'
import { CurrentUser } from '@/app/actions/getCurrentUser'
import Image from 'next/image'
import HeartButton from '../HeartButton'

interface ProductHeadProps {
  title: string
  imageSrc: string
  id: string
  currentUser?: CurrentUser
}

const ProductHead = ({
  title,
  imageSrc,
  id,
  currentUser
}:ProductHeadProps) => {
  return (
    <>
      <Heading title={title}/>
      <div className='relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-xl'>
        <Image src={imageSrc} alt="상품" fill className="object-cover w-full"/>
        <div className='absolute top-5 right-5'>
          <HeartButton productId={id} currentUser={currentUser}/>
        </div>
      </div>
    </>
  )
}

export default ProductHead