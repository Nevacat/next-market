"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { FaSkiing } from "react-icons/fa";
import { GiLargeDress  } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { PiCarProfileDuotone, PiFlowerLotus, PiTShirtDuotone } from "react-icons/pi";
import { SlScreenDesktop } from "react-icons/sl";
import { BsAndroid2 } from "react-icons/bs";

export const categories = [
  {
    label: "디지털기기",
    path: "digital",
    icon: BsAndroid2,
    description: "디지털 카테고리입니다.",
  },
  {
    label: "생활가전",
    path: "appliances",
    icon: SlScreenDesktop,
    description: "생활가전 카테고리입니다.",
  },
  {
    label: "가구/인테리어",
    path: "interior",
    icon: MdOutlineVilla,
    description: "가구/인테리어 카테고리입니다.",
  },
  {
    label: "여성의류",
    path: "women-clothiing",
    icon: GiLargeDress,
    description: "여성의류 카테고리입니다.",
  },
  {
    label: "남성패션/잡화",
    path: "men-fashion",
    icon: PiTShirtDuotone,
    description: "남성패션/잡화 카테고리입니다.",
  },
  {
    label: "뷰티/미용",
    path: "beauty",
    icon: PiFlowerLotus,
    description: "뷰티/미용 카테고리입니다.",
  },
  {
    label: "스포츠/레저",
    path: "sports",
    icon: FaSkiing,
    description: "스포츠/레저 카테고리입니다.",
  },
  {
    label: "중고차",
    path: "used-car",
    icon: PiCarProfileDuotone,
    description: "중고차 카테고리입니다.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  return (
    <div className="flex flex-row items-center justify-between pt-2 md:pt-4 overflow-x-auto scrollbar-hide">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          path={item.path}
          label={item.label}
          selected={category === item.path}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Categories;
