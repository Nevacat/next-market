import React from "react";
import getProducts, { ProductParams } from "../actions/getProducts";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "@/components/Container";
import ProductCard from "@/components/Products/ProductCard";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";

interface LikesPageProps {
  searchParams: ProductParams;
}

const LikesPage = async ({ searchParams }: LikesPageProps) => {
  const page = searchParams?.page;
  const currentUser = await getCurrentUser();
  const products = await getProducts(searchParams);
  const likeProducts = products?.data.filter((product: any) => {
    return currentUser?.favorites.includes(product.id);
  });
  const total = currentUser!.favorites.length;
  return (
    <Container>
      {products&&likeProducts!.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-4 md:mt-6 gap-2 md:gap-8">
          {likeProducts!.map((product: any) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
      <div className="w-full my-10 flex justify-center items-center">
        <Pagination totalItems={total} page={page} />
      </div>
    </Container>
  );
};

export default LikesPage;
