"use client";
import { cn } from "@/lib/util";
import React, { useCallback, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { user } from "@/atom/user";
import Image from "next/image";

const Navbar = ({currentUser}:any) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setNavbarOpen(!navbarOpen);
  },[navbarOpen]);
  const setIsUser = useSetRecoilState(user);
  setIsUser(currentUser)
  return (
    <nav className={"relative z-10 w-full text-white"}>
      <div className={cn("flex items-center justify-between mx-5 sm:mx-10 lg:mx-20")}>
        <div className={"flex items-center text-2xl h-14 mt-2"}>
          <Link href="/" onClick={()=>navbarOpen&&setNavbarOpen(false)}>
            <Image src="/logoImage.webp" alt="logo"  width={200} height={200}/>
          </Link>
        </div>
        <div className={"text-3xl sm:hidden text-black"}>
          {!navbarOpen ? <div onClick={handleMenu}>+</div> : <div onClick={handleMenu}>-</div>}
          </div>
        <div className={"hidden sm:block"}>
          <NavItem/>
        </div>
      </div>
      <div className="block sm:hidden">
        {navbarOpen && <NavItem mobile={true} setNavbar={setNavbarOpen}/> }
      </div>
    </nav>
  );
};

export default Navbar;
