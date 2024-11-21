import React, { useState } from "react";
import Slider from "react-slick";
import SliderCard from "./layer/SliderCard";
import Container from "./layer/Container";
import sliderCardPic1 from "../assets/celebrate.png";
import sliderCardPic2 from "../assets/lgd.png";
import sliderCardPic3 from "../assets/oldDhaka.png";
import HeadingText from "./layer/HeadingText";

const ActivitySlider = () => {
  let items = [
    {
      image: sliderCardPic1,
      text: "Work for a Better Bangladesh Trust celebrates 25 years",
    },
    {
      image: sliderCardPic2,
      text: "A call to make farmers' markets permanent under the urban food desk of the LGD",
    },
    {
      image: sliderCardPic3,
      text: "Inauguration of mobile playground for children in Old Dhaka",
    },
    {
      image: sliderCardPic1,
      text: "Work for a Better Bangladesh Trust celebrates 25 years",
    },
    {
      image: sliderCardPic2,
      text: "A call to make farmers' markets permanent under the urban food desk of the LGD",
    },
    {
      image: sliderCardPic3,
      text: "Inauguration of mobile playground for children in Old Dhaka",
    },
    {
      image: sliderCardPic1,
      text: "Work for a Better Bangladesh Trust celebrates 25 years",
    },
    {
      image: sliderCardPic2,
      text: "A call to make farmers' markets permanent under the urban food desk of the LGD",
    },
    {
      image: sliderCardPic3,
      text: "Inauguration of mobile playground for children in Old Dhaka",
    },
  ];

  let [active, setActive] = useState(0);

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "400px",
    speed: 2000,
    autoplaySpeed: 7500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="bg-none flex justify-center w-full">
        <ul className="flex gap-x-3 md:gap-x-5 py-5 md:py-8 mx-auto w-full justify-center">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` w-8 md:w-20 h-2 md:h-4  rounded-full text-transparent border md:border-2 ${
          active == i
            ? "  bg-primary "
            : "  bg-primary/30 "
        } `}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          className: "center",
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          className: "center",
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          className: "center",
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 763,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          className: "center",
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 414,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 3,
          className: "center",
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="xl:pt-32 md:pt-24 pt-16 overflow-hidden slider-container">
      <HeadingText text="Activity" className="px-3" />
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <SliderCard
              className="border-none"
              image={item.image}
              text={item.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActivitySlider;
