import React from 'react'
import f1 from "../../public/images/f1.png"
import f2 from "../../public/images/f2.png"
import f3 from "../../public/images/f3.png"
import f4 from "../../public/images/f4.png"
import logo from "../../public/images/logo.png"
import { NavLink } from 'react-router-dom'
import image1 from "../../public/images/image1.png"
import image2 from "../../public/images/image2.png"
import image3 from "../../public/images/image3.png"
import facebook from "../../public/images/facebook.png"
import inst from "../../public/images/inst.png"
import wp from "../../public/images/wp.png"
import youtube from "../../public/images/youtube.png"
const Footer = () => {
  return (
   <>
   <footer className="h-auto py-[40px]">
     <div className="w-full h-auto lg:h-[100px] bg-orange">
       <div className="container mx-auto flex flex-wrap items-center h-full justify-between">
         <div className="flex items-center space-x-3">
           <img src={f1} alt="f1"/>
           <p className="text-black text-[14px] font-poppins font-normal">Səhiyyə mütəxəssisləri ilə <br/>  40 illik iş təcrübəsi</p>
         </div>
         <div className="lg:w-[1px] lg:h-[48px] lg:bg-[#C5A54D]"></div>
         <div className="flex items-center space-x-3">
           <img src={f2} alt="f1"/>
           <p className="text-black text-[14px] font-poppins font-normal">Dəriyə dərin hörmət</p>
         </div>
         <div className="lg:w-[1px] lg:h-[48px] lg:bg-[#C5A54D]"></div>
         <div className="flex items-center space-x-3">
           <img src={f3} alt="f1"/>
           <p className="text-black text-[14px] font-poppins font-normal">Effektivlik və təhlükəsizlik tibbi <br/>nəzarət altında sınaqdan keçirilmişdir</p>
         </div>
         <div className="lg:w-[1px] lg:h-[48px] lg:bg-[#C5A54D]"></div>
         <div className="flex items-center space-x-3">
           <img src={f4} alt="f1"/>
           <p className="text-black text-[14px] font-poppins font-normal">Səhiyyə mütəxəssisləri ilə <br/> 40 illik iş təcrübəsi</p>
         </div>
       </div>
     </div>
     <div className="container mx-auto mt-[30px] flex flex-col lg:flex-row">
   <div className="flex flex-col items-center justify-center lg:justify-normal">
   <div className="flex flex-col items-center justify-center lg:justify-normal ">
         <img src={logo} alt="logo"/>
         <p className="text-center w-[300px] lg:w-[220px] text-[#282828] text-[13.5px] lg:text-[14px] font-poppins font-normal leading">NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir. NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı</p>
       </div>
        
       <div className="lg:hidden flex items-center justify-between space-x-12  mt-[40px]">
          <div>
            <img src={image1} alt="" className="h-[20px]"/>
          </div>
          <div>
            <img src={image2} alt="" className="h-[38px]"/>
          </div>
          <div>
            <img src={image3} alt="" className="h-[22px]"/>
          </div>
        </div>
   </div>
       <div className="lg:bg-grayBg lg:w-[1px] lg:h-[430px] lg:ml-[40px]"></div>
      <div className="">
      <div className="flex flex-col items-center  lg:items-baseline  lg:flex-row lg:justify-between lg:ml-[60px] lg:px-0 w-[95%] lg:w-[120%]  mt-[25px]">
         <div className="mb-[25px] lg:mb-0 flex flex-col items-center justify-center lg:items-baseline lg:justify-content">
           <h2 className="text-lightBlack text-[16px] font-poppins font-medium mt-[25px] lg:mt-0">Kateqoriyalar</h2>
           <ul className="mt-[16px] grid grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-none">
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Brendlər və Məhsullar</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Qulluq setləri</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Üz qulluğu</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Bədən qulluğu</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Günəş qoruyucuları</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Göz yaş alma</NavLink></li>
           </ul>
         </div>
         <div className="mb-[25px] lg:mb-0 flex flex-col items-center justify-center lg:items-baseline lg:justify-content">
           <h2 className="text-lightBlack text-[16px] font-poppins font-medium">Şirkət</h2>
           <ul className="mt-[16px] grid grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-none">
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Haqqımızda</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Faydalı</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal ">Aksiyalar və Kompaniya</NavLink></li>
           </ul>
         </div>
         <div className="mb-[20px] lg:mb-0 flex flex-col items-center justify-center lg:items-baseline lg:justify-content">
           <h2 className="text-lightBlack text-[16px] font-poppins font-medium">Kömək</h2>
           <ul className="mt-[16px] grid grid-cols-2 place-items-center lg:place-items-start  lg:grid-cols-none">
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">FAQ</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Ödəniş və çatdırılma</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Zəmanət şərtləri</NavLink></li>
             <li className="mb-[6px]"><NavLink className="text-lightgray text-[14px] font-poppins font-normal">Mağaza ünvanlarır</NavLink></li>
           </ul>
         </div>
      
       </div>
        
        <div className="hidden lg:flex justify-between w-[110%] ml-[60px] mt-[40px]">
          <div className="w-[175px] h-[134px] flex flex-col items-center justify-center rounded-[10px] border border-greyColor">
            <img src={image1} alt=""/>
            <div className="flex space-x-4 mt-[30px]">
              <img src={facebook} alt=""/>
              <img src={inst} alt=""/>
            </div>
          </div>
          <div className="w-[175px] h-[134px] flex flex-col items-center justify-center rounded-[10px] border border-greyColor">
            <img src={image2} alt=""/>
            <div className="flex space-x-4 mt-[30px]">
              <img src={facebook} alt=""/>
              <img src={inst} alt=""/>
            </div>
          </div>
          <div className="w-[175px] h-[134px] flex flex-col items-center justify-center rounded-[10px] border border-greyColor">
            <img src={image3} alt=""/>
            <div className="flex space-x-4 mt-[30px]">
              <img src={facebook} alt=""/>
              <img src={inst} alt=""/>
            </div>
          </div>
        </div>
      </div>
     </div>

     <div className="container mx-auto flex flex-col items-center justify-center w-full space-y-5 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-between mt-[35px]">
       <div className=" order-[2] lg:order-1">
         <p className="text-[#A0A0A0] text-[14px] font-poppins font-medium">Bütün hüquqlar qorunur. © 2022 BIODERMA</p>
       </div>
       <div className="flex space-x-3 order-[1] lg:order-2 pb-[15px] lg:pb-0">
         <NavLink><img src={wp} alt=""/></NavLink>
         <NavLink><img src={youtube} alt=""/></NavLink>
       </div>
       <div className="order-[3] lg:order-3">
         <p className="text-[#A0A0A0] text-[14px] font-poppins font-medium">Bu bir <span className="text-[#9747FF] text-[14px] font-poppins font-medium">Marcom</span> məhsuludur.</p>
       </div>
      
     </div>
   </footer>
   </>
  )
}

export default Footer
