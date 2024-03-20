import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

const LinkData = [
  {
    name: "좋아요 목록",
    path: "/likes",
    Icon: AiOutlineHeart,
  },
  {
    name: "판매품 목록",
    path: "/sell",
    Icon: FiBookmark,
  },
];

const MenuList = () => {
  return (
    <div className="flex flex-col gap-4 h-full pb-10 justify-between">
      <div className="grid grid-cols-2 gap-8 mt-8">
        {LinkData.map((link) => (
          <Link
            href={link.path}
            key={link.name}
            className="flex bg-black text-white text-xl rounded-md justify-center items-center gap-2 p-2 cursor-pointer transition hover:opacity-70"
          >
            <link.Icon size={24} />
            <div>{link.name}</div>
          </Link>
        ))}
      </div>
      <div className="bg-black h-[calc(100%_-_44px)] flex justify-center rounded-md items-center text-white text-2xl ">준비중</div>
      <button className="bg-black w-full text-white text-2xl rounded-md p-2 cursor-pointer transition hover:opacity-70" onClick={()=>signOut()}>로그아웃</button>
    </div>
  );
};

export default MenuList;
