import React from 'react'
const ProductCard = ({product}) => {
  return (
    <>
    <div className="w-[377px] h-[578px] mb-[25px] lg:mb-0">
        <div className="w-full h-[400px]">
            <img src={product.img} alt=""/>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-black  text-center text-[18px] font-poppins font-medium leading-[21px] mt-[20px]">{product.about}</h2>
            <p className="text-lightgray text-[16px] font-poppins font-normal leading-[21px] mt-[20px]">{product.desc}</p>
            <button className="w-[278px] h-[45px] border border-black rounded-[4px] mt-[20px] text-black text-[18px] font-poppins font-normal leading-[40px]">Kəşf et</button>
        </div>
    </div>
      
    </>
  )
}

export default ProductCard
