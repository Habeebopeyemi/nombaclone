import React from "react";

const NormalBtn = ({ description }) => {
  return (
    <button className="block w-full font-bold bg-yellow-400 p-3 rounded-md hover:bg-yellow-300">
      {description}
    </button>
  );
};

export default NormalBtn;
