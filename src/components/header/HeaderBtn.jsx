import React from "react";

const HeaderBtn = ({ title, href, className }) => {
  return (
    <button className={`${className}`}>
      <a href={href}>{title}</a>
    </button>
  );
};

export default HeaderBtn;
