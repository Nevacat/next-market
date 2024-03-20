"use client";
import { user } from "@/atom/user";
import MenuList from "@/components/User/MenuList";
import UserInfo from "@/components/User/UserInfo";
import { User } from "@prisma/client";
import React from "react";
import { useRecoilValue } from "recoil";

const UserClient = () => {
  const currentUser = useRecoilValue(user) as User | null;
  return (
    <div className="flex flex-col items-center py-10 h-[calc(100vh_-_64px)]">
      <div className="max-w-screen-lg flex flex-col h-full ">
        <UserInfo currentUser={currentUser} />
        <MenuList />
      </div>
    </div>
  );
};

export default UserClient;
