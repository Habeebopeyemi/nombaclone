import React from "react";
import { Divider } from "antd";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import FooterLink from "./FooterLink";
import FooterAddress from "./FooterAddress";
import { footer_links, footer_address } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full p-3 bg-black text-white text-center">
      <div className="w-full max-w-[1024px] mx-auto">
        <div className="w-full max-w-[310px] sm:w-[50%] mx-auto py-4">
          <h5 className="text-[1.7rem] font-bold">
            Get a free <span className="text-yellow-400">Nomba</span> account
          </h5>
          <p>Change how you spend, manage annd save money</p>
          <div className="flex justify-between my-4 p-2">
            <button className="flex bg-slate-900 p-3 rounded-[1.5rem]">
              <span className="mr-3 mt-[4px]">
                <FaGooglePlay />
              </span>
              <span>Google Play</span>
            </button>
            <button className="flex bg-slate-900 p-3 rounded-[1.5rem]">
              <span className="mr-3 mt-[4px]">
                <FaApple />
              </span>
              <span>App Store</span>
            </button>
          </div>
        </div>
        <div className="sm:w-[90%] flex flex-wrap justify-between">
          {footer_links.map((link) => (
            <FooterLink {...link} />
          ))}
        </div>
        <div className="text-start">
          <h6 className="text-lg font-bold">
            <span className="text-xl">X</span> nomba
          </h6>
          <ul className="flex">
            <li className="mr-4">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="mr-4">
              <a href="/"> Terms of Service</a>
            </li>
          </ul>
        </div>
        <Divider className="bg-white" />
        <div className="text-start md:flex justify-between">
          <div className="md:flex">
            {footer_address.map((address) => (
              <FooterAddress {...address} />
            ))}
          </div>
          <p>
            <span>&#169;</span>2023 Nomba, all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
