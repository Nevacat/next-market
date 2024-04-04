import React, { useEffect, useState } from "react";
import ProductClient from "./ProductClient";
import getProductsById from "@/app/actions/getProductById";
import axios from "axios";
import { Product } from "@prisma/client";
import getProducts from "@/app/actions/getProducts";

export interface Params {
  productId?: string;
}

export async function  generateStaticParams() {
  const res = await getProducts();
  if(!res){
    return [{productId:""}]
  }
  
  return res.data.map((products:Product)=>({
    productId:products.id.toString()
  }
  ));
}

const ProductsDetail = async ({ params }: { params: Params }) => {
  const { productId } = params;
  const data = await fetch(`${process.env.NEXT_PAGE_URL}/api/products/${productId}`,{cache:"no-store"}).then(res=>res.json());
  console.log(data)
  // const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('client')
  //     const res = await fetch(`/api/products/${params.productId}`);
  //     const product = await res.json();
  //     setData(product);
  //   }
  //   fetchData();
  // }, [params.productId]);
  return <div>{data !== null && <ProductClient product={data!} />}</div>;
};

export default ProductsDetail;
