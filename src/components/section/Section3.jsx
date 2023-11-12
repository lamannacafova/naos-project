import React from "react";
import matrico from "../../../public/videos/matrico.mp4";
import biodorma from "../../../public/images/biodorma.png";
import { NavLink } from "react-router-dom";
const Section3 = () => {
  return (
    <>
      <section className="h-full pb-[0px] lg:pb-[30px] ">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className=" h-auto lg:h-[400px]">
            <video  className="w-full h-full rounded-[10px]">
              <source src={matrico} type="video/mp4" />
            </video>
          </div>
          <div className="h-auto mt-[25px] lg:mt-[0px] lg:w-[671px] lg:h-[400px]">
            <img
              src={biodorma}
              alt=""
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-[120px] lg:h-[140px]">
              <NavLink className=" w-[278px] h-[45px] rounded-[4px] border border-blue text-blue text-[18px] font-poppins font-normal leading-[40px] flex items-center justify-center">Daha çox</NavLink>
          </div>
      </section>
    </>
  );
};

export default Section3;
