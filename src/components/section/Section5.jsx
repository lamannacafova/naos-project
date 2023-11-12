import React from 'react'
import cosmetic from "../../../public/images/group_cosmetic.png"
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
const Section5 = () => {
  return (
    <>
      <section className="h-full mt-[30px]">
          <div className="container mx-auto">
          <Swiper className="lg:w-[1356px] lg:h-[450px]"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>     
          <div
            className=" bg-cover bg-center bg-no-repeat rounded-[15px] relative"
            style={{
              backgroundImage: `url(${cosmetic})`, height:"450px" 
            }}
          >
                 <div className="h-full flex flex-col  justify-between px-[40px] lg:px-[80px]  py-[35px] absolute z-50">
              <div>
                <h2 className="text-white text-[24px] font-poppins font-semibold">
                MEGA DISCOUNT OF</h2>
                <p className="text-white text-[24px] font-poppins font-semibold">
                  THE MONTH
                  </p>
                  <div className="w-[100px] h-[2px] bg-white my-[20px]"></div>
                  <p className="text-white text-[24px] font-poppins font-semibold">UP TO 30% OFF</p>
              </div>
              <div>
                <h4 className="text-white text-[16px] font-poppins font-normal leading-[21px]">
                  Make-up removal
                </h4>
                <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[10px]">
                  Sensibio Micellar water, 1 l
                </h2>
              </div>
            </div>
              </div>
              </SwiperSlide>
      <SwiperSlide>
      <div
            className=" bg-cover bg-center bg-no-repeat rounded-[15px] relative"
            style={{
              backgroundImage: `url(${cosmetic})`, height:"450px" 
            }}
          >
                 <div className="h-full flex flex-col  justify-between px-[40px] lg:px-[80px]  py-[35px] absolute z-50">
              <div>
                <h2 className="text-white text-[24px] font-poppins font-semibold">
                MEGA DISCOUNT OF</h2>
                <p className="text-white text-[24px] font-poppins font-semibold">
                  THE MONTH
                  </p>
                  <div className="w-[100px] h-[2px] bg-white my-[20px]"></div>
                  <p className="text-white text-[24px] font-poppins font-semibold">UP TO 30% OFF</p>
              </div>
              <div>
                <h4 className="text-white text-[16px] font-poppins font-normal leading-[21px]">
                  Make-up removal
                </h4>
                <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[10px]">
                  Sensibio Micellar water, 1 l
                </h2>
              </div>
            </div>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
            className=" bg-cover bg-center bg-no-repeat rounded-[15px] relative"
            style={{
              backgroundImage: `url(${cosmetic})`, height:"450px" 
            }}
          >
                 <div className="h-full flex flex-col  justify-between px-[40px] lg:px-[80px]  py-[35px] absolute z-50">
              <div>
                <h2 className="text-white text-[24px] font-poppins font-semibold">
                MEGA DISCOUNT OF</h2>
                <p className="text-white text-[24px] font-poppins font-semibold">
                  THE MONTH
                  </p>
                  <div className="w-[100px] h-[2px] bg-white my-[20px]"></div>
                  <p className="text-white text-[24px] font-poppins font-semibold">UP TO 30% OFF</p>
              </div>
              <div>
                <h4 className="text-white text-[16px] font-poppins font-normal leading-[21px]">
                  Make-up removal
                </h4>
                <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[10px]">
                  Sensibio Micellar water, 1 l
                </h2>
              </div>
            </div>
              </div>
      </SwiperSlide>
    </Swiper>

          </div>
      </section>
    </>
  )
}

export default Section5
