import React from "react";
import ArrowBtn from "../Common/ArrowBtn";
import NormalBtn from "../Common/NormalBtn";
import Promo from "./Promo";
import { Divider } from "antd";

const Intro = () => {
  return (
    <section className="w-full p-3">
      <div className="w-full">
        <div className="w-full md:flex">
          <h2 className="text-[2.2rem] mb-3 font-bold md:basis-[50%] md:text-[3rem] lg:basis-[65%] lg:text-[3.5rem]">
            Get better at business with Nomba.
          </h2>
          <p className="mb-7 md:basis-[40%] md:text-lg md:mt-4 lg:basis-[35%]">
            Trusted by 235,000+ businesses to securely accept any type of
            payment and grow their business.
          </p>
        </div>
        <div className="w-full md:w-[60%] md:flex">
          <NormalBtn description={"Create an account for Free"} />
          <ArrowBtn
            description={"Contact sales"}
            className={"justify-center p-3 basis-[40%]"}
          />
        </div>
          </div>
          <Divider className="bg-black"/>
      <Promo />
    </section>
  );
};

export default Intro;
