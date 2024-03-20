import Container from "@/components/Container";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import { user } from "@/atom/user";
import { useSetRecoilState } from "recoil";
import FloatingButton from "@/components/FloatingButton";
import Categories from "@/components/Category/Categories";
import axios from "axios";
import getProducts, { ProductParams } from "../actions/getProducts";
import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@prisma/client";
import Pagination from "@/components/Pagination";
import EmptyState from "@/components/EmptyState";

interface MainProps {
  searchParams: ProductParams;
}

export default async function Main({ searchParams }: MainProps) {
  const page = searchParams?.page;

  const products = await getProducts(searchParams);
  const total = products?.totalItems;
  return (
    <Container>
      <Categories />
      {products?.data.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-4 md:mt-6 gap-2 md:gap-8">
          {products?.data.map((product: Product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      )}
      <div className="w-full my-10 flex justify-center items-center">
        <Pagination totalItems={total} page={page} />
      </div>
      <FloatingButton href="/products/upload">+</FloatingButton>
    </Container>
  );
}
