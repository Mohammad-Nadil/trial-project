import React, { useState } from "react";
import CustomBtn from "./CustomBtn";
import pic from '../../assets/oldDhaka.png'

const SliderCard = ({className, href , text , image}) => {
    let [show , setShow] = useState(false)
  return (
    <div 
      className={`z-[999999] border aspect-[466/552] relative  group mx-1 md:mx-2  2xl:mx-3  ${className}`}
    ><div onClick={()=>setShow(!show)} className="absolute w-full h-full -z-10">
        <img className="w-full h-full object-cover" src={image} alt={image} />
    </div>
      <div  onClick={()=>setShow(!show)} className="h-2/4 relative">
        <div className="absolute h-1/2 w-full bg-gradient-to-t from-[#008645] opacity-0 group-hover:opacity-100 to-transparent top-full"></div>
      </div>
      <div className="text h-1/4  bg-gradient-to-t from-black  after:w-full after:h-full after:bg relative ">
        <div className="absolute w-[89.23%] opacity-0 duration-300 h-full top-0 left-0 group-hover:opacity-100 border-b border-b-[#008645] z-50 mx-6"></div>
      </div>
      <div className="bg-black h-1/3 md:h-1/4 xl:h-1/3  2xl:h-1/4 px-6 flex flex-col gap-y-2 py-3 justify-between">
        <p  onClick={()=>setShow(!show)} className="text-white font-bold text-base lg:text-xl xl:text-sm 2xl:text-xl font-inter">
          {text}
        </p>
        <div className={`btn flex duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100 justify-end ${show ?"visible opacity-1000":"invisible opacity-0"} `}>
          <CustomBtn href={href}  className="text-xs sm:text-base p-0.5 " text="Details" />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
