import React from "react";
import Slider from "react-slick";
import sliderCardPic1 from "../../assets/celebrate.png";
import sliderCardPic2 from "../../assets/lgd.png";
import sliderCardPic3 from "../../assets/oldDhaka.png";
import SliderCard from "./SliderCard";
import HeadingText from "./HeadingText";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute bottom-full   right-0  -translate-y-full text-primary  ${className}`}
      onClick={onClick}
    >
      <FaArrowRightLong className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute bottom-full right-6 -translate-x-full -translate-y-full   text-primary ${className}`}
      onClick={onClick}
    >
      <FaArrowLeftLong className="text-3xl" />
    </div>
  );
}

const MediaSlider = () => {
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
  ];

  let settings = {
    dots: false,
    arrows: true,
    // fade: true
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container overflow-hidden ">
      <HeadingText text="Articles" className="py-6" />
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <SliderCard
              className="border-none w-[80vw] sm:w-auto"
              image={item.image}
              text={item.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaSlider;
