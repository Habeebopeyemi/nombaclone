import React from "react";

const GadgetCard = ({
  image,
  title,
  cards,
  description,
  designation,
  price,
  children,
}) => {
  return (
    <div
      className={
        title === "Nomba Mini"
          ? "w-full md:max-w-[400px] p-5 mb-9 bg-gray-800 shadow-lg rounded-lg md:w-[40%] md:mb-2"
          : "w-full md:max-w-[400px] p-5 mb-9 bg-slate-400 shadow-lg rounded-lg md:w-[40%] md:mb-2"
      }
    >
      <div className="w-[40%] h-[200px] mx-auto mt-5 mb-10">
        <img
          src={image}
          alt="serviceimg"
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between mb-3">
          <p className="text-xl font-bold mb-2">{title}</p>
          <div className="flex">
            {cards.map((card, index) => (
              <span className="block mr-2 text-xl" key={index}>
                {card}
              </span>
            ))}
          </div>
        </div>
        <p className="text-white text-sm mb-10">{description}</p>
        <div className="w-full flex justify-between">
          <div className="basis-[40%] text-start">
            <p className="text-sm">{designation}</p>
            <span className="font-[800]">&#8358;{price}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
