"use client";
import { like, user } from "@/atom/user";
import { Product, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";
import HeartButton from "../HeartButton";
import { fromNow } from "@/helper/formatDate";

const ProductCard = ({ data }: { data: Product }) => {

  const router = useRouter();
  const formatPrice = new Intl.NumberFormat("ko-KR").format(data.price);
  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className="col-span-1 cursor-pointer flex flex-col w-full gap-4 transition group shadow-xl p-2 md:p-3 rounded-xl"
    >
      <div className="relative w-full overflow-hidden aspect-square rounded-xl">
        <Image
          src={data.imageSrc}
          alt="제품"
          fill
          sizes="auto"
          className="object-cover w-full h-full transition group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <HeartButton productId={data.id}/>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between mb-2">
          <p className="text-base md:text-lg font-semibold">{data.name}</p>
          <p className="text-sm w-[calc(100vw_-_1.5rem_-_1rem)/2] md:w-[230px] h-[40px] text-neutral-500 text-overflow">{data.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base md:text-lg font-semibold">
            {formatPrice}
            <span className="text-base font-medium">원</span>
          </p>
          <p className="text-sm">{fromNow(data.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
