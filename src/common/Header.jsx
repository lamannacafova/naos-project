import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import logo from "../../public/images/logo.png";
import image1 from "../../public/images/image1.png";
import image2 from "../../public/images/image2.png";
import image3 from "../../public/images/image3.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  const [show, setShow] = useState(false);
  const [showUl, setShowUl] = useState(false);
  const handleshow = () => setShow(!show);
  
  const toggleShowUl = () => setShowUl(!showUl);
  return (
    <>
      <header className="w-full">
        {/* header-top */}
        <div className=" lg:flex  items-center justify-end h-[40px] bg-lightBlue">
          <div className="w-[700px] h-full flex items-center mx-[40px] lg:mx-0">
            <p className="font-poppins text-white text-[14px] lg:text-[15px] leading-[20px] font-medium">
              Bioderma, Institut Esthederm ve Etat Pur rəsmi satış saytıdır.
            </p>
          </div>
          <div className="flex items-center space-x-3 mr-10">
            <FaPhoneAlt className="text-white text-[18px] hidden lg:block" />
            <p className="hidden lg:block font-poppins text-white text-[15px] leading-[20px] font-medium">
              +994 12 123 4567
            </p>
          </div>
        </div>

        <div className="min-h-[70px] border-b border-grayColor bg-white">
          <div className="container mx-auto h-full flex items-center justify-between">
            <div className="min-w-[200px]">
              <img src={logo} alt="logo" />
            </div>
            <div className=" lg:flex hidden items-center space-x-14">
              <img src={image1} alt="image1" className="h-[30px]" />
              <img src={image2} alt="image2" className="h-[30px]" />
              <img src={image3} alt="image3" className="h-[30px]" />
            </div>
            <div className="lg:flex hidden  items-center space-x-5">
              <form className="flex items-center relative">
                <input
                  type="search"
                  placeholder="Axtar"
                  className="w-[253px] h-[34px] pl-[12px] border border-grey rounded-[4px] text-lightBlack  "
                />
                <AiOutlineSearch className="text-[23px] text-lightBlack absolute right-[-2px] mr-[12px]" />
              </form>
              <NavLink>
                <FiHeart className="text-[23px] text-lightBlack" />
              </NavLink>
              <NavLink>
                <AiOutlineShopping className="text-[23px] text-lightBlack" />
              </NavLink>
              <div className="space-x-5 divide-x-[1px] divide-gray">
                <button className="text-lightBlack text-[16px] font-poppins font-normal leading-[20px] underline">
                  AZ
                </button>
                <button className="p-3">EN</button>
              </div>
            </div>
            {/* responsiv-search */}
            <div className="lg:hidden flex space-x-3 items-center ">
              <NavLink className="w-[35px] h-[35px] border border-[#E8E8E8] rounded-[6px] flex items-center justify-center">
                <AiOutlineSearch className="text-[22px] text-lightBlack " />
              </NavLink>
              <div>
                <NavLink className="w-[35px] h-[35px] border border-[#E8E8E8] rounded-[6px] flex items-center justify-center">
                  <FiHeart className="text-[22px] text-lightBlack" />
                </NavLink>
              </div>
              <div
                onClick={handleshow}
                className="bg-blueBg w-[35px] h-[35px] rounded-[7px] flex items-center justify-center"
              >
                <RxHamburgerMenu className="text-white text-[20px]"/>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[70px]  h-0    lg:block    border-b border-gray">
          <div className="container lg:flex hidden mx-auto h-full flex items-center justify-between">
            <ul className="flex flex-col  lg:flex-row absolute z-20  space-x-12">
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Brendlər və Məhsullar</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Üz qulluğu</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Bədən qulluğu</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Günəş qoruyucuları</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Gözəl yaş alma</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Qulluq setləri</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Aksiyalar və Kompaniyalar</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Haqqımızda</NavLink>
              </li>
              <li className="text-lightBlack text-[14px] font-poppins font-semibold leading-[17.5px]">
                <NavLink>Faydalı</NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`absolute top-0 left-0  delay-200 duration-300 lg:hidden block  ${
              show ? " left-[0px]" :"left-[-701px]" 
            }  w-full z-[55]  bg-white h-full`}
          >
            <div className="flex py-2 justify-between items-center  border-t-2 border-[#DBE5EA] px-[20px]">
              <h2 className="tetx-black text-[20px] font-poppins font-semibold">Menu</h2>
             <div className="w-[32px] h-[32px] bg-[#1F3C4B] rounded-[6px] flex items-center justify-center" onClick={handleshow}>
             <AiOutlineClose className="text-white text-[20px]"/>
             </div>
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
              <NavLink className="text-black text-[14px] font-poppins font-medium">Brendlər və məhsullar</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" onClick={toggleShowUl} />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Üz qulluğu</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Bədən qulluğu</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Günəş Qoruyucuları</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]"/>
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Gözəl yaş alma</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2  border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Qulluq setləri</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2  border-[#DBE5EA] px-[20px]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Aksiyalar və Kompaniyalar</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 border-[#DBE5EA] px-[20px] ">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Haqqımızda</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
            <div className="flex py-2 justify-between items-center border-t-2 px-[20px] border-b-2 border-[#DBE5EA]">
              <div>
                <NavLink className="text-black text-[14px] font-poppins font-medium">Faydalı</NavLink>
              </div>
              <RiArrowDropDownLine className="text-[35px] text-[#A0A0A0]" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
