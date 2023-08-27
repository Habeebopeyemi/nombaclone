import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
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
export default HeaderDropdown;
