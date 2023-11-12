import React from "react";
import sc1 from "../../../public/images/sc1.png";
import bg from "../../../public/images/bg.png";
import img2 from "../../../public/images/img2.png";
import img1 from "../../../public/images/img1.png";
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Section1 = () => {
  return (
    <>
      <section className="h-auto py-0 lg:py-[40px]">
        <div className=" container-fluid lg:container mx-auto flex flex-wrap items-center justify-between">
        <Swiper  className="w-[976px] h-[220px] lg:rounded-[15px] lg:w-[960px] lg:h-[496px] mb-[20px] lg:mb-0"
      // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div
            className="w-full h-[270px] lg:w-[960px] lg:h-[496px] bg-contain bg-no-repeat rounded-[15px] relative swiper"
            style={{
              backgroundImage: `url(${sc1})`
            }}
          >
            <div className=" h-auto mt-[100px] lg:mt-[0px] min-[320px]:mt-[60px] lg:h-full flex items-center pl-[30px] lg:pl-[50px] ">
              <h2 className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                Ləkəyə qarşı
                <p className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-semibold leading-[30px] lg:leading-[40px]">
                  Parlaqladıcı
                  <span className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                    qayğı:
                  </span>
                </p>
                <p className="text-blue text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                  Pigmentbio
                </p>
              </h2>
            </div>
            <div
              className="w-[106px] h-[100px]  lg:w-[106px] lg:h-[233px] bg-contain bg-no-repeat absolute top-[95px] right-[20px] min-[390px]:top-[85px] min-[375px]:top-[77px] min-[375px]:right-[18px] min-[414px]:top-[96px] min-[430px]:top-[104px] min-[430px]:right-[20px] min-[412px]:top-[95px] min-[412px]:right-[20px] min-[360px]:top-[70px] min-[360px]:right-[16px] min-[375px]:right-[20px] min-[320px]:top-[50px] min-[320px]:right-[8px] min-[463px]:top-[119px] min-[463px]:right-[38px] lg:top-[220px] lg:right-[195px]"
              style={{
                backgroundImage: `url(${img2})`
              }}
            ></div>
          </div>
      </SwiperSlide>
      <SwiperSlide>       
         <div
            className="w-full h-[270px]  lg:w-[960px] lg:h-[496px] bg-contain bg-no-repeat rounded-[15px] relative swiper"
            style={{
              backgroundImage: `url(${sc1})`
            }}
          >
            <div className=" h-auto mt-[100px] lg:mt-[0px] lg:h-full flex items-center pl-[30px] lg:pl-[50px] ">
              <h2 className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                Ləkəyə qarşı
                <p className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-semibold leading-[30px] lg:leading-[40px]">
                  Parlaqladıcı
                  <span className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                    qayğı:
                  </span>
                </p>
                <p className="text-blue text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                  Pigmentbio
                </p>
              </h2>
            </div>
            <div
              className="w-[106px] h-[100px] lg:w-[106px] lg:h-[233px] bg-contain bg-no-repeat absolute top-[77px] right-[15px]  lg:top-[220px] lg:right-[195px]"
              style={{
                backgroundImage: `url(${img2})`
              }}
            ></div>
          </div>
          </SwiperSlide>
          <SwiperSlide>       
         <div
            className="w-full h-[270px]  lg:w-[960px] lg:h-[496px] bg-contain bg-no-repeat rounded-[15px] relative swiper"
            style={{
              backgroundImage: `url(${sc1})`
            }}
          >
            <div className=" h-auto mt-[100px] lg:mt-[0px] lg:h-full flex items-center pl-[30px] lg:pl-[50px] ">
              <h2 className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                Ləkəyə qarşı
                <p className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-semibold leading-[30px] lg:leading-[40px]">
                  Parlaqladıcı
                  <span className="text-lightBlack text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                    qayğı:
                  </span>
                </p>
                <p className="text-blue text-[20px] lg:text-[28px] font-poppins font-normal leading-[30px] lg:leading-[40px]">
                  Pigmentbio
                </p>
              </h2>
            </div>
            <div
              className="w-[106px] h-[100px] lg:w-[106px] lg:h-[233px] bg-contain bg-no-repeat absolute top-[77px] right-[15px]   lg:top-[220px] lg:right-[195px]"
              style={{
                backgroundImage: `url(${img2})`
              }}
            ></div>
          </div>
          </SwiperSlide>
         </Swiper>
          <div
            className="bg-no-repeat bg-cover border border-red-500  rounded-[15px] relative mx-[35px] lg:mx-0"
            style={{
              backgroundImage: `url(${bg})`,
              width: "376px",
              height: "496px",
            }}
          >
            <div className="h-full flex flex-col  justify-between px-[30px]  py-[35px] absolute z-50">
              <div>
                <h2 className="text-lightBlack text-[20px] font-poppins font-normal">
                  Ləkəyə qarşı
                  <p className="text-lightBlack text-[20px] font-poppins font-semibold">
                    Parlaqladıcı{" "}
                    <span className="text-lightBlack text-[20px] font-poppins font-normal">
                      qayğı:
                    </span>
                  </p>
                </h2>
              </div>
              <div>
                <h4 className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">
                  Make-up removal
                </h4>
                <h2 className="min-[360px]:text-[16px] min-[320px]:text-[14.5px] text-black text-[18px] font-poppins font-medium leading-[21px] mt-[10px]">
                  Sensibio Micellar water, 1 l
                </h2>
                <button className="w-[158px] h-[45px] bg-red rounded-[4px] text-white text-[18px] font-poppins font-semibold leading-[40px] mt-[40px]">
                  30% Endirim
                </button>
              </div>
            </div>
            <div
              className="bg-contain bg-no-repeat   absolute top-[30%] right-[16%]"
              style={{
                backgroundImage: `url(${img1})`,
                width: "106px",
                height: "289px",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
