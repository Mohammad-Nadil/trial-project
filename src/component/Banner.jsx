import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

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
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  let imgs = [slider1, slider2, slider3];

  return (
    <div className="">
      <Slider {...settings}>
        {imgs.map((item) => (
          <div className="div !w-screen">
            <img
              className="w-full object-cover object-center"
              src={item}
              alt={item}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
