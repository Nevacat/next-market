import React from "react";
import Avatar from "../Avatar";
import ProductCategory from "./ProductCategory";
import { IconType } from "react-icons";
import { CurrentUser } from "@/app/actions/getCurrentUser";
import { User } from "@prisma/client";
import { formatDate } from "@/helper/formatDate";

interface ProductInfoProps {
  user: User;
  category: {
    icon: IconType;
    label: string;
    description: string;
  };
  createdAt: Date;
  desc: string | null;
}

const ProductInfo = ({ user, category, createdAt, desc }: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Avatar src={user?.image} />
        <p>{user?.username}</p>
      </div>
      <div>
        {formatDate(createdAt)}
      </div>
      <hr/>
      <div>
        <ProductCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      </div>
      <hr/>
      <div
        className="min-h-[100px]"
      >{desc}</div>
    </div>
  );
};

export default ProductInfo;
