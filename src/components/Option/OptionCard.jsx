import React from "react";

const OptionCard = ({ icon, title, description }) => {
  return (
    <div className="w-[80%] mx-auto lg:mb-5">
      <div className="w-[50px] h-[50px] mx-auto my-10 p-[.8rem] bg-yellow-400 rounded-full">
        {icon}
      </div>
      <h4 className="text-center font-bold">{title} </h4>
      <p className="font-[300] text-sm">{description}</p>
    </div>
  );
};

export default OptionCard;
