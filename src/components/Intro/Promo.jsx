import React from "react";
import NormalBtn from "../Common/NormalBtn";

const Promo = () => {
  return (
    <section className="text-center mt-8 max-w-[550px] mx-auto">
      <div className="w-[30%] mb-5 mx-auto border-[1px] border-dashed border-yellow-400 p-1 rounded-[1.2rem]">
        <button className="bg-yellow-400 py-1 px-8 rounded-[1rem] hover:bg-yellow-300">
          New Promo
        </button>
      </div>
      <h3 className="w-[40%] mx-auto mb-7 text-[2rem] font-bold md:w-full md:text-[2.5rem]">
        Introducing Nomba <span className="italic mr-[0.15rem]">M</span>ini{" "}
      </h3>
      <p className="text-slate-500 mb-10">
        Nomba mini is your pocket-sized payment padi that guarantees a reliable,
        fastand smooth payment experience.
      </p>
      <div className="max-w-[300px] mx-auto md:text-lg">
        <NormalBtn description={"Learn more"} className={"w-full"} />
      </div>
      <div className="w-full">
        <img
          src="https://verk.store/eng_pl_Universal-remote-control-for-tv-smart-00741a-3750_6.jpg"
          alt="promoimg"
          srcset=""
        />
      </div>
    </section>
  );
};

export default Promo;
