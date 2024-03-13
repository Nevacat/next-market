import React from "react";
import ProductClient from "./ProductClient";
import getProductsById from "@/app/actions/getProductById";

export interface Params {
  productId?: string;
}

const ProductsDetail = async ({params}:{params:Params}) => {
  const product = await getProductsById(params);
  return (
    <div>
      <ProductClient product={product!} />
    </div>
  );
};

export default ProductsDetail;
