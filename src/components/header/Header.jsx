import React, { useState, useEffect } from "react";
import { nav_links } from "../../data";
import HeaderLink from "./HeaderLink";
// import {  Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "../../hooks/hooks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const token = sessionStorage.getItem("token");
  const size = useWindowSize();
  useEffect(() => {
    if (size.width > 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [size.width]);
  return (
    <header className="w-full absolute z-10 top-0 left-0 bg-[rgba(255,255,255,0.7)]">
      <nav className="w-full p-3 md:flex justify-between">
        <div className="flex justify-between md:basis-[15%]">
          <div className="text-lg">nomba</div>
          <div
            className="p-2 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RxHamburgerMenu className="text-xl" />
          </div>
        </div>
        {open ? (
          <div
            className={
              token
                ? "md:flex md:basis-[80%] justify-between lg:basis-[70%] smax:basis-[65%]"
                : "md:flex md:basis-[80%] justify-evenly"
            }
          >
            <ul
              className={
                token
                  ? "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
                  : "my-4 mr-2 basis-[40%] md:flex justify-between lg:basis-[30%] smax:basis-[25%]"
              }
            >
              {nav_links.map((info) => {
                return <HeaderLink {...info} />;
              })}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
