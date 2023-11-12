import React from "react";
import Section1 from "../../components/section/Section1";
import Section2 from "../../components/section/Section2";
import Section3 from "../../components/section/Section3";
import Section4 from "../../components/section/Section4";
import Section5 from "../../components/section/Section5";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="order-1 lg:order-1 mb-[30px] lg:mb-0">
          <Section1 />
        </div>
        <div className="order-4 lg:order-2">
          <Section2 />
        </div>
        <div className="order-2 lg:order-3">
          <Section3 />
        </div>
        <div className="order-5 lg:order-4">
          <Section4 />
        </div>
        <div className="order-3 lg:order-5">
          <Section5 />
        </div>
      </div>
    </>
  );
};

export default Home;
