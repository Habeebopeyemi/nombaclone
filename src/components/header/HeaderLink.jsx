import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SubMenu } from "./HeaderDropdown";
import useWindowSize from "../../hooks/hooks";

const HeaderLink = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const size = useWindowSize();
  const handleHover = () => {
    console.log(isHovered);
    setIsHovered(!isHovered);
  };
  useEffect(() => {
    if (size.width < 1024) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [size.width]);
  return (
    <li
      onClick={(e) => e.preventDefault()}
      className="w-full mr-3 mb-5 lg:mb-2 lg:mr-2 lg:basis-[28%]"
    >
      <div
        className="w-full flex justify-between text-navlink lg:text-sm lg:relative"
        onMouseEnter={handleHover}
        // onMouseLeave={handleHover}
      >
        {title}
      </div>
      {children.map((child, index) => (
        <div key={index} className="">
          {isHovered && (
            <div className="w-full bg-white flex justify-between py-4 lg:absolute lg:w-[40%] lg:h-[400px] mb-3">
              <div className="flex justify-between">
                <div className="bg-yellow-50 w-[50px] h-[50px] p-4 mr-3 rounded-full">
                  {child.icon}
                </div>
                <div className="w-full">
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
          )}
          {isHovered &&
            child.subChildren &&
            child.subChildren.map((subChild) => (
              <p className="hidden ml-16 mb-2 text-sm font-[500]">
                <a href={subChild.href}></a>
                {subChild.title}
              </p>
            ))}
        </div>
      ))}
    </li>
  );
};
export default HeaderLink;
