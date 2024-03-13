"use client";
import { user } from "@/atom/user";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";
import HeartButton from "../HeartButton";

const ProductCard = ({ data }: { data: Product }) => {
  const currentUser = useRecoilValue(user);
  const router = useRouter();
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
          <HeartButton currentUser={currentUser} productId={data.id} />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between">
          <p className="text-md md:text-lg font-semibold">{data.name}</p>
          <p className="text-neutral-500">{data.description}</p>
        </div>
          <p className="text-md md:text-lg font-semibold">{data.price}<span className="text-md font-medium">원</span></p>
      </div>
    </div>
  );
};

export default ProductCard;
