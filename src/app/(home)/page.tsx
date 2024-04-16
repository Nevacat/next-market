'use client'
import Container from "@/components/Container";
import React, { use, useEffect, useState } from "react";
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

export default function Main({ searchParams }: MainProps) {
  const page = searchParams?.page;
  // const products = await getProducts(searchParams);/
  const [products,setProducts] = useState([]);
  // const total = products?.totalItems;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products`).then(res=>res.json());
      setProducts(res);
    };
    fetchData();
  }, [searchParams]);
  return (
    <Container>
      <Categories />
      {
        !products && <EmptyState />
      }
      {products?.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-4 md:mt-6 gap-2 md:gap-8">
            {products?.map((product: Product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
          <div className="w-full my-10 flex justify-center items-center">
            <Pagination totalItems={10} page={page} />
          </div>
        </>
      )}
      <FloatingButton href="/products/upload">+</FloatingButton>
    </Container>
  );
}
