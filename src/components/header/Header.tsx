"use client";

import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setScrolled] = React.useState<boolean>(false);

  /**
   * * Event listener for scroll position
   */
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setScrolled(false) : setScrolled(true);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setScrolled(false) : setScrolled(true);
      });
    };
  }, []);

  return (
    <header
      className={`h-[80px] z-40 bg-[var(--bg-primary)] ${
        !isScrolled ? "border-slate-700 border-b" : "border-b-0"
      } fixed top-0 left-[50%] -translate-x-1/2 w-full`}
    >
      <div className="flex items-center justify-between h-full mx-5 lg:mx-[3rem]">
        <h1 className="bg-clip-text bg-gradient-to-r text-transparent from-[#CB69C1] text-4xl md:text-5xl font-bold to-[#6C72CB]">
          rex.dev
        </h1>
        <ul
          className={`gap-7 mr-2 text-white hidden md:flex text-xl font-semibold`}
        >
          <li className="__header-navs">Home</li>
          <li className="__header-navs">About</li>
          <li className="__header-navs">Projects</li>
          <li className="__header-navs">About</li>
        </ul>
        <HiMenuAlt1
          color="white"
          size={30}
          className={`fixed right-3 z-10 block md:hidden`}
        />
      </div>
    </header>
  );
};

export default Header;
