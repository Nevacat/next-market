import React, { useEffect, useState } from "react";
import ProductClient from "./ProductClient";
import axios from "axios";
import { Product } from "@prisma/client";
import getProducts from "@/app/actions/getProducts";
import getProductsById from "@/app/actions/getProductById";

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
  const data = await getProductsById(params);
  // console.log(data)
  // const [data, setData] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/products/${params.productId}`);
  //     const product = await res.json();
  //     setData(product);
  //   }
  //   fetchData();
  // }, [params.productId]);
  return <div>{data !== null && <ProductClient product={data!} />}</div>;
};

export default ProductsDetail;
