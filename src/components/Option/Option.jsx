import React from "react";
import OptionCard from "./OptionCard";
import { options } from "../../data";
const Option = () => {
  return (
    <section className="w-full bg-black text-white text-center p-10">
      <div className="text-[1.8rem] font-bold my-4">
        You've got options.
        <br />
        Receive payments on your terms
      </div>
      <div className="lg:flex">
        {options.map((opt) => {
          return <OptionCard key={opt.key} {...opt} />;
        })}
      </div>
    </section>
  );
};

export default Option;
