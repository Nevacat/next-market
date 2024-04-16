"use client";
import { user } from "@/atom/user";
import Button from "@/components/Button";
import { categories } from "@/components/Category/Categories";
import Container from "@/components/Container";
import ProductHead from "@/components/Products/ProductHead";
import ProductInfo from "@/components/Products/ProductInfo";
import { Product, User } from "@prisma/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue } from "recoil";

interface ProductClientProps {
  product: Product & { user: User };
}

const ProductClient = ({ product }: ProductClientProps) => {
  const router = useRouter();
  const currentUser = useRecoilValue(user) as User | null;
  const category = categories.find(
    (category) => category.path === product.category
  );
  const Kakaomap = dynamic(() => import("@/components/Kakaomap"), {
    ssr: false,
  });
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-4 md:gap-6">
          <ProductHead
            title={product.name}
            imageSrc={product.imageSrc}
            id={product.id}
          />
        </div>
        <div className="grid gird-cols-1 mt-6 md:grid-cols-2 md:gap-10">
          <ProductInfo
            user={product.user}
            category={category!}
            createdAt={product.createdAt}
            desc={product.description}
          />
          <div className="mt-4">
            <Kakaomap
              detailPage
              latitude={product.latitude}
              longitude={product.longitude}
            />
          </div>
        </div>
        {
          product.user.id !== currentUser?.id && (
            <div className="mt-10">
              <Button
                onClick={() => {
                  router.push(`/chat?id=${product.user.id}`);
                }}
                text="판매자와 채팅하기"
              />
            </div>
          )
        }
      </div>
    </Container>
  );
};

export default ProductClient;
