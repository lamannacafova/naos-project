import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
const SingleCard = ({product}) => {
  return (
    <>
      <div className="w-[298px] h-[462px]">
        <div className="mb-[-40px] ml-[17px] space-x-2">
          <button className="w-[100px] h-[30px] rounded-[4px] bg-blueBg text-white text-[15px] font-poppins font-normal">Çox satılan</button>
          <button className="w-[150px] h-[30px] rounded-[4px] bg-red text-white text-[15px] font-poppins font-normal">Pulsuz çatdırılma</button>
        </div>
          <div className="w-full h-[278px] rounded-[6px] bg-greyBg flex items-center justify-center">
              <img src={product.img} alt="" className="w-[78px] h-[178px]"/>
          </div>
          <div className="w-full h-[184px]">
              <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px]">{product.title}</p>
              <h2 className="text-black text-[18px] font-poppins font-medium leading-[21px] mt-[12px]">{product.desc}</h2>
              <p className="text-lightBlack text-[17px] font-poppins font-medium leading-[21px] mt-[12px]">{product.price} AZN</p>
             <div className="flex items-center justify-center space-x-3 w-full h-[45px] rounded-[4px] border border-blue mt-[13px]">
             <button className="text-blue text-[18px] font-poppins font-normal leading-[40px]">Səbətə at</button>
             <AiOutlineShopping className="text-[24px] text-blue"/>
             </div>

          </div>
      </div>
    </>
  )
}

export default SingleCard
