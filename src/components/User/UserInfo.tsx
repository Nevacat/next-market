import { DEFAULT_IMAGE } from "@/constant";
import { cn } from "@/lib/util";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

const UserInfo = ({ currentUser }: { currentUser: User | null }) => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div
        className={cn(
          "relative overflow-hidden rounded-full w-[8rem] h-[8rem] md:w-[180px] md:h-[180px]"
        )}
      >
        <Image
          src={currentUser?.image ? currentUser?.image : DEFAULT_IMAGE}
          width={200}
          height={200}
          alt="프로필 이미지"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            {currentUser?.username}
            <span className="text-xl md:text-3xl font-medium">님</span>
          </h1>
          <p className="text-2xl md:text-4xl mt-1">환영합니다!</p>
        </div>
        <p className="text-sm md:text-base text-gray-400">{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
