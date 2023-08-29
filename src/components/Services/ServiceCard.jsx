import React from "react";

const ServiceCard = ({ image, title, description, children }) => {
  return (
    <div className="w-full mb-9 shadow-lg  md:max-w-[400px]">
      <div className="w-full h-[250px]">
        <img
          src={image}
          alt="serviceimg"
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="w-full p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;
