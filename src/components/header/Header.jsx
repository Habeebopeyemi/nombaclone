import React, { useState, useEffect } from "react";
import { nav_links } from "../../data";
import HeaderLink from "./HeaderLink";
// import {  Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "../../hooks/hooks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 1024) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [size.width]);
  return (
    <header className="w-full bg-[rgba(255,255,255,0.7)]">
      <nav className="w-full p-3 lg:flex justify-between lg:w-[95%] lg:mx-auto">
        <div className="flex justify-between md:basis-[15%] lg:my-[0.25rem] lg:basis-[10%]">
          <h1 className="text-lg font-bold">
            <span className="text-xl">X</span> nomba
          </h1>
          <div
            className="p-2 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className="text-xl" />
          </div>
        </div>
        {open ? (
          <>
            <div className="basis-[85%] lg:flex justify-between">
              <ul className="my-4 mr-2 basis-[40%] lg:flex lg:basis-[50%] lg:my-2 smax:basis-[80%]">
                {nav_links.map((info) => {
                  return <HeaderLink {...info} />;
                })}
              </ul>
              <ul className="flex flex-col lg:basis-[35%] lg:flex-row lg:justify-end">
                <li className="w-[30%] py-3 px-2 mx-auto mb-3 text-center hover:underline hover:cursor-pointer lg:py-2 lg:text-sm lg:mx-0">
                  Sign in
                </li>
                <li className="w-[30%] py-3 px-2 mx-auto mb-3 text-center font-bold bg-yellow-400 rounded-md hover:bg-yellow-500 hover:cursor-pointer lg:py-2 lg:basis-[50%] lg:text-sm lg:mx-0">
                  Open an account
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
