import React from "react";
import GadgetCard from "./GadgetCard";
import { gadgets } from "../../data";

const Gadget = () => {
  return (
    <div className="w-full my-5 p-3 text-white text-center ">
      <h4 className="my-8 text-[2rem] text-black font-bold">
        Durable, easy-to-use payment machines for businesses in Africa
      </h4>
      <div className="md:flex justify-center flex-wrap gap-3">
        {gadgets.map((gadget) => (
          <GadgetCard key={gadget.key} {...gadget}>
            {gadget.action}
          </GadgetCard>
        ))}
      </div>
    </div>
  );
};

export default Gadget;
