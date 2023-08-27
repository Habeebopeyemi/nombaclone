import React from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderLink = ({ title, children }) => (
  <li
    onClick={(e) => e.preventDefault()}
    className="w-full mb-5 border-b-[1px]"
  >
    <div className="w-full flex justify-between text-navlink">{title}</div>
    {children.map((child) => (
      <div>
        <div className="w-full flex justify-between py-4">
          <div className="flex justify-between">
            <div className="bg-yellow-50 w-[50px] h-[50px] p-4 mr-3 rounded-full">
              {child.icon}
            </div>
            <div>
              <p className="font-[500] text-[.9rem]">{child.title}</p>
              <span className="text-[.8rem] font-[300]">
                {child.description}
              </span>
            </div>
          </div>
          <div>
            {child.subChildren ? (
              <AiOutlineDown className="text-sm font-[100] text-slate-500" />
            ) : (
              <AiOutlineRight className="text-sm font-[100] text-slate-500" />
            )}
          </div>
        </div>
        {child.subChildren &&
          child.subChildren.map((subChild) => (
            <p className="w-[77%] mx-auto mb-2 text-sm font-[500]">
              <a href={subChild.href}></a>
              {subChild.title}
            </p>
          ))}
      </div>
    ))}
  </li>
);
export default HeaderLink;
