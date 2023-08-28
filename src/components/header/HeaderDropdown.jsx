import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

import { items } from "../../data";
const HeaderDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <li onClick={(e) => e.preventDefault()}>
      <div className="flex justify-between">
        PRODUCTS
        <DownOutlined />
      </div>
    </li>
  </Dropdown>
);
export const SubMenu = (children) => {
  return (
    <>
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
    </>
  );
};
export default HeaderDropdown;
