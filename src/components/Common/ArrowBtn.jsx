import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const ArrowBtn = ({ description }) => {
  return (
    <button className="w-full flex p-3 text-sm justify-center">
      <span className="mr-2 hover:mr-3 ease-in-out md:font-bold md:text-lg">
        {description}
      </span>
      <span className="mt-[1px]">
        <AiOutlineRight className="text-yellow-400 text-lg font-bold md:text-3xl" />
      </span>
    </button>
  );
};

export default ArrowBtn;
