import React, { useState } from "react";
import CustomBtn from "./CustomBtn";
import green from "../../assets/cardGreen.png";
import black from "../../assets/cardBlack.png";
import "../../App.css";

const SliderCard = ({ className, href, text, image }) => {
  return (
    <div
      className={`z-[9] border aspect-[466/552] relative  group mx-1 md:mx-2  2xl:mx-3 group ${className}`}
    >
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 duration-1000" src={image} alt={image} />
      </div>
      <div className=" relative w-full h-full">
        <img
          className="absolute top-full opacity-0 group-hover:opacity-100 duration-300 -translate-y-full  w-full left-0 z-10"
          src={green}
          alt={green}
        />
        <img
          className="absolute top-full -translate-y-full z-20  w-full left-0"
          src={black}
          alt={black}
        />
      </div>
      <div className="  h-1/3  py-4 px-6 flex flex-col  absolute bottom-0 md:justify-around z-50 justify-center  after:w-[87%] after:h-0.5 after:absolute after:bottom-[90%] after:bg-primary after:opacity-0 after:duration-300 group-hover:after:opacity-100 bg-gradient-to-t after:z-50 ">
        <p className="text-white font-bold text-base lg:t/ext-sm   xl:text-base  font-inter relative z-50">
          {text}
        </p>
        <div
          className={`link flex duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100 justify-end relative z-50 `}
        >
          <CustomBtn
            href={href}
            className="text-base md:text-lg px-1.5 py-0.5 md:py-2 md:px-3 font-normal  hidden lg:flex "
            text="Details"
          />
        </div>

        <img
          className="absolute top-full -translate-y-full z-10  w-full left-0"
          src={black}
          alt={black}
        />
      </div>
    </div>
  );
};

export default SliderCard;
