import React from "react";
import { MainDishes } from "../data/data";

const MainDish = () => {
  return (
    <>
      <div className="flex justify-center items-center  h-48 ">
        <div className="w-full h-[12px] bg-primary" />
        <h1 className="tracking-wide text-nowrap font-bold text-4xl lg:text-5xl leading-normal text-secondary px-2">
          Main Dishes
        </h1>
        <div className="w-full h-[12px] bg-primary" />
      </div>
      <div className="flex justify-center items-center w-full  ">
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4   justify-around items-center w-full ">
            {MainDishes.map((dish, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-col relative mb-12 "
              >
                <img
                  src={dish.image}
                  className=" lg:w-[207px] lg:h-[207px]  rounded-full "
                />
                <span className="w-[15px] h-[15px] bg-primary rounded-full absolute md:right-[5rem] md:top-[-0.1rem] top-[-0.2rem] right-[1.1rem] lg:top-[-0.6rem] lg:right-[2rem] z-10 animate-bounce"></span>
                <span className="absolute flex items-center justify-center shadow-xl md:right-[5rem] md:top-[0.2rem] lg:top-[-0.7rem] lg:right-[2rem] top-[-0.2rem]  right-[1.4rem] rounded-full w-[35px] h-[35px] lg:w-[54px] lg:h-[54px] bg-secondary text-white text-sm lg:text-lg ">
                  ${dish.price}
                </span>

                <h2 className="text-secondary text-center font-semibold lg:leading-3 text-[14px] mb-3">
                  {dish.title}
                </h2>
                <span className="text-center text-[10px] lg:text-sm text-smT  ">
                  {dish.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDish;
