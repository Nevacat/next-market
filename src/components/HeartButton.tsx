import { like, user } from '@/atom/user';
import useFavorite from '@/hooks/useFavorite'
import { cn } from '@/lib/util'
import { User } from '@prisma/client';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useRecoilValue } from 'recoil';

interface HeartButtonProps{
  productId:string;
}

const HeartButton = ({productId}:HeartButtonProps) => {
  const {hasFavorite,toggleFavorite} = useFavorite({
    productId
  })

  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="
          absolute
          fill-white
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={cn(hasFavorite?"fill-rose-500":"fill-neutral-500")}
      />
    </div>
  )
}

export default HeartButton
