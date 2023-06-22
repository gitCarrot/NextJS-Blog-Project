"use client"

import Link from "next/link";
import React, { useCallback } from "react";
import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, [])


  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-2">
        <div className="flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <Link href="/"><span className="text-sm font-semibold tracking-widest ">Git Carrot</span></Link>
        </div>
        <div className="flex gap-12 text-md text-zinc-400">
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
          <Link href="#" className="text-black font-medium">Contact</Link>
        </div>
      </nav>

      {/* <div
        onClick={toggleOpen}
        
      >

      </div> */}

    </div>

  );
};

export default Navbar;
