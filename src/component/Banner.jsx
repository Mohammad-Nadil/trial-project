import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import "../App.css";

const Banner = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    fade: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  let imgs = [slider1, slider3];

  return (
    <div className=" relative w-screen !overflow-x-hidden">
      <Slider {...settings}>
        {imgs.map((item) => (
          <div className="div w-screen aspect-[1920/920]">
            <img
              className="w-full h-full object-cover object-center"
              src={item}
              alt={item}
            />
          </div>
        ))}
        <div className="div w-screen aspect-[1920/920]">
          <img
            className="w-full h-full object-cover object-center"
            src={slider2}
            alt={slider2}
          />
          <div className="left absolute  w-1/2 h-full  top-0 left-0 text-white font-inter flex justify-center items-center">
            <div className="text w-4/5 hidden sm:flex flex-col gap-y-3 sm:gap-y-6 glass py-0.5 sm:py-3 px-1 sm:px-5 ">
              <h2 className="  md:text-xl font-semibold">
                Lorem ipsum dolor sit, amet consectetur ?
              </h2>
              <p className="sm:w-10/12 text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                quia harum numquam itaque reiciendis veniam temporibus dolorem
                
              </p>
            </div>
          </div>
          <div className=" right absolute w-full sm:w-1/2 h-full  top-0 left-1/2 flex justify-center items-center">
            <div className=" w-10/12 sm:w-11/12 aspect-video flex flex-col gap-y-8  py-3 px-5">
              <iframe
              className="w-full h-full rounded-2xl  "
                src="https://www.youtube.com/embed/Nj7gIvemj2s?si=Y4ZRGmbpHKFmV7lB"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
