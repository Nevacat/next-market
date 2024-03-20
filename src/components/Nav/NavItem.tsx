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
    name: "ADMIN",
    path: "/admin",
  },
  {
    name: "USER",
    path: "/user",
  },
  {
    name: "CHAT",
    path: "/chat",
  },
];

interface ILinkDataType {
  name: string;
  path: string;
}

interface INavItemProps {
  mobile?: boolean;
  setNavbar?:(value:boolean)=>void;
}

const NavItem = ({ mobile,setNavbar }: INavItemProps) => {
  const pathname = usePathname();
  const currentUser = useRecoilValue(user) as User | null;
  return (
    <ul
      className={cn(
        "text-md flex justify-center gap-4 w-full items-center text-black",
        mobile && "flex-col h-full py-4"
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
            onClick={()=>setNavbar&&setNavbar(false)}
          >
            <Link href={data.path}>{
              data.name === "USER" && currentUser ? `${currentUser.username}님` : data.name
            }</Link>
          </li>
        );
      })}
      {currentUser ? (
        <li className={cn("py-1 text-center cursor-pointer")} onClick={()=>setNavbar&&setNavbar(false)}>
          <button onClick={() => signOut()}>SIGNOUT</button>
        </li>
      ) : (
        <li
          className={cn(
            "py-1 text-center cursor-pointer",
            pathname === "/auth/login" && "border-b-4"
          )}
        >
          <Link href="/auth/login" onClick={()=>setNavbar&&setNavbar(false)}>SIGNIN</Link>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
