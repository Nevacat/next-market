import React from "react";
import Link from "next/link";
import { cn } from "@/lib/util";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { user } from "@/atom/user";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { User } from "@prisma/client";
const LinkData = [
  {
    name: "admin",
    path: "/admin",
  },
  {
    name: "user",
    path: "/user",
  },
  {
    name: "chat",
    path: "/chat",
  },
];

interface ILinkDataType {
  name: string;
  path: string;
}

interface INavItemProps {
  mobile?: boolean;
}

const NavItem = ({ mobile }: INavItemProps) => {
  const pathname = usePathname();
  const currentUser = useRecoilValue(user) as User | null;
  return (
    <ul
      className={cn(
        "text-md flex justify-center gap-4 w-full items-center text-black",
        mobile && "flex-col h-full pb-10"
      )}
    >
      {LinkData.map((data: ILinkDataType, index: number) => {
        return (
          <li
            key={index}
            className={cn(
              "py-1 text-center cursor-pointer",
              pathname === data.path && "border-b-4"
            )}
          >
            <Link href={data.path}>{
              data.name === "user" && currentUser ? `${currentUser.username}님` : data.name
            }</Link>
          </li>
        );
      })}
      {currentUser ? (
        <li className={cn("py-1 text-center cursor-pointer")}>
          <button onClick={() => signOut()}>signOut</button>
        </li>
      ) : (
        <li
          className={cn(
            "py-1 text-center cursor-pointer",
            pathname === "/auth/login" && "border-b-4"
          )}
        >
          <Link href="/auth/login">signIn</Link>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
