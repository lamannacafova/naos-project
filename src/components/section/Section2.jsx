import React from 'react'
import img1 from "../../../public/images/img1.png"
import img2 from "../../../public/images/img2.png"
import img3 from "../../../public/images/img3.png"
import img4 from "../../../public/images/img4.png"
import { NavLink } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'

const Section2 = () => {
  return (
    <>
      <section className="h-full mt-[70px] lg:mt-0 lg:py-[30px]">
       <div className="container mx-auto">
       <div className="flex items-center justify-between">
            <h2 className="text-blue text-[20px] font-poppins font-normal leading-[40px] w-[200px] border-b-[2px] border-blue ">Endirimli məhsullar</h2>
            <NavLink className="w-[123px] h-[30px] rounded-[4px] border border-lightBlack text-lightBlack text-[15px] font-poppins font-normal flex items-center justify-center">Hamısına bax</NavLink>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-[30px]">
        <div className="w-[298px] h-[462px]">
        <div className="mb-[-40px] ml-[17px] space-x-2">
          <button className="w-[100px] h-[30px] rounded-[4px] bg-blueBg text-white text-[15px] font-poppins font-normal">Çox satılan</button>
          <button className="w-[150px] h-[30px] rounded-[4px] bg-red text-white text-[15px] font-poppins font-normal">Pulsuz çatdırılma</button>
        </div>
          <div className="w-full h-[278px] rounded-[6px] bg-greyBg flex items-center justify-center">
              <img src={img1} alt="" className="w-[78px] h-[178px]"/>
          </div>
          <div className="w-full h-[184px]">
              <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">Bioderma</p>
              <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[12px]">Sensibio Micellar water, 1 l</h2>
              <p className="text-lightBlack text-[17px] font-poppins font-medium leading-[21px] mt-[12px]">14.00 AZN</p>
             <div className="flex items-center justify-center space-x-3 w-full h-[45px] rounded-[4px] border border-blue mt-[13px]">
             <button className="text-blue text-[18px] font-poppins font-normal leading-[40px]">Səbətə at</button>
             <AiOutlineShopping className="text-[24px] text-blue"/>
             </div>
          </div>
      </div>
      <div className="w-[298px] h-[462px]">
        <div className="mb-[-40px] ml-[17px]">
          <button className="w-[100px] h-[30px] rounded-[4px] bg-blueBg text-white text-[15px] font-poppins font-normal">Çox satılan</button>
        </div>
          <div className="w-full h-[278px] rounded-[6px] bg-greyBg flex items-center justify-center">
              <img src={img2} alt="" className="w-[78px] h-[178px]"/>
          </div>
          <div className="w-full h-[184px]">
              <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">Bioderma</p>
              <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[12px]">Sensibio Micellar water, 1 l</h2>
              <p className="text-lightBlack text-[17px] font-poppins font-medium leading-[21px] mt-[12px]">14.00 AZN</p>
             <div className="flex items-center justify-center space-x-3 w-full h-[45px] rounded-[4px] border border-blue mt-[13px]">
             <button className="text-blue text-[18px] font-poppins font-normal leading-[40px]">Səbətə at</button>
             <AiOutlineShopping className="text-[24px] text-blue"/>
             </div>
          </div>
      </div>
      <div className="w-[298px] h-[462px]">
        <div className="mb-[-40px] ml-[17px] space-x-2">
          <button className="w-[100px] h-[30px] rounded-[4px] bg-blueBg text-white text-[15px] font-poppins font-normal">Çox satılan</button>
          <button className="w-[150px] h-[30px] rounded-[4px] bg-red text-white text-[15px] font-poppins font-normal">Pulsuz çatdırılma</button>
        </div>
          <div className="w-full h-[278px] rounded-[6px] bg-greyBg flex items-center justify-center">
              <img src={img3} alt="" className="w-[78px] h-[178px]"/>
          </div>
          <div className="w-full h-[184px]">
              <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">Bioderma</p>
              <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[12px]">Sensibio Micellar water, 1 l</h2>
              <p className="text-lightBlack text-[17px] font-poppins font-medium leading-[21px] mt-[12px]">14.00 AZN</p>
             <div className="flex items-center justify-center space-x-3 w-full h-[45px] rounded-[4px] border border-blue mt-[13px]">
             <button className="text-blue text-[18px] font-poppins font-normal leading-[40px]">Səbətə at</button>
             <AiOutlineShopping className="text-[24px] text-blue"/>
             </div>
          </div>
      </div>
      <div className="w-[298px] h-[462px]">
        <div className="mb-[-40px] ml-[17px]">
          <button className="w-[100px] h-[30px] rounded-[4px] bg-blueBg text-white text-[15px] font-poppins font-normal">Çox satılan</button>
        </div>
          <div className="w-full h-[278px] rounded-[6px] bg-greyBg flex items-center justify-center">
              <img src={img4} alt="" className="w-[78px] h-[178px]"/>
          </div>
          <div className="w-full h-[184px]">
              <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">Bioderma</p>
              <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[12px]">Sensibio Micellar water, 1 l</h2>
              <p className="text-lightBlack text-[17px] font-poppins font-medium leading-[21px] mt-[12px]">14.00 AZN</p>
             <div className="flex items-center justify-center space-x-3 w-full h-[45px] rounded-[4px] border border-blue mt-[13px]">
             <button className="text-blue text-[18px] font-poppins font-normal leading-[40px]">Səbətə at</button>
             <AiOutlineShopping className="text-[24px] text-blue"/>
             </div>
          </div>
      </div>
        </div>
       </div>
      </section>
    </>
  )
}

export default Section2
