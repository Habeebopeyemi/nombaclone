import React from "react";

const FooterLink = ({ title, data }) => {
  return (
    <div className="text-start basis-[50%] mb-6 sm:basis-[20%] md:basis-[25%]">
      <h6 className="text-slate-500">{title}</h6>
      <ul className="text-sm">
        {data.map((link) => (
          <li
            key={link.key}
            className="mb-2 hover:text-yellow-500 hover:underline"
          >
            <a href={link.href}>{link.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
