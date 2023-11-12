import React from 'react'
import ProductCard from '../card/ProductCard'
import product from '../../data/Product'

const Section4 = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
          <h2 className="text-black text-[20px] font-poppins font-normal leading-[40px] w-[190px] border-b-[2px] border-black">Dəri qulluğu rutini</h2>
          <div className="flex flex-wrap items-center justify-between mt-[30px]">
          {
              product.map((item,index)=>{
                  return <ProductCard product={item} key={index}/>
              })
          }
          </div>
      </div>
    </section>
  )
}

export default Section4
