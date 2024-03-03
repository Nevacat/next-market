"use client";
import { cn } from "@/lib/util";
import React, { useCallback, useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setNavbarOpen(!navbarOpen);
  },[navbarOpen]);

  return (
    <nav className={cn("relative z-10 w-full bg-[#535C91] text-white")}>
      <div className={cn("flex items-center justify-between mx-5 sm:mx-10 lg:mx-20")}>
        <div className={cn("flex items-center text-2xl h-14")}>
          <Link href="/">로드마켓</Link>
        </div>
        <div className={cn("text-2xl sm:hidden")}>
          {!navbarOpen ? <div onClick={handleMenu}>+</div> : <div onClick={handleMenu}>-</div>}
          </div>
        <div className={cn("hidden sm:block")}>
          <NavItem/>
        </div>
      </div>
      <div className="block sm:hidden">
        {navbarOpen && <NavItem mobile={true}/> }
      </div>
    </nav>
  );
};

export default Navbar;
