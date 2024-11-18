import React from "react";
import Slider from "react-slick";
import SliderCard from "./layer/SliderCard";
import Container from "./layer/Container";
import sliderCardPic1 from "../assets/celebrate.png";
import sliderCardPic2 from "../assets/lgd.png";
import sliderCardPic3 from "../assets/oldDhaka.png";
import HeadingText from "./layer/HeadingText";

const ActivitySlider = () => {
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
          slidesToScroll: 2,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 763,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="xl:py-32 md:pt-24 pt-16 overflow-hidden ">
      <HeadingText text="Activity" />
      <Slider {...settings}>
        <div>
          <SliderCard
            image={sliderCardPic1}
            text="Work for a Better Bangladesh Trust celebrates 25 years"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic2}
            text="A call to make farmers' markets permanent under the urban food desk of the LGD"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic3}
            text="Inauguration of mobile playground for children in Old Dhaka"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic1}
            text="Work for a Better Bangladesh Trust celebrates 25 years"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic2}
            text="A call to make farmers' markets permanent under the urban food desk of the LGD"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic3}
            text="Inauguration of mobile playground for children in Old Dhaka"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic1}
            text="Work for a Better Bangladesh Trust celebrates 25 years"
          />
        </div>
        <div>
          <SliderCard
            image={sliderCardPic2}
            text="A call to make farmers' markets permanent under the urban food desk of the LGD"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ActivitySlider;
