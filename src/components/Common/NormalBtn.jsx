import React from "react";

const NormalBtn = ({ description, className }) => {
  return (
    <button
      className={`block font-bold bg-yellow-400 p-3 rounded-md hover:bg-yellow-300 ${className}`}
    >
      {description}
    </button>
  );
};

export default NormalBtn;
