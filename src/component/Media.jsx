import React from "react";
import Container from "./layer/Container";
import CustomBtn from "./layer/CustomBtn";
import "../App.css";
import MediaSlider from "./layer/MediaSlider";

const Li = ({ text, date }) => {
  return (
    <div className="font-inter text-white flex flex-col gap-y-2">
      <h3 className="font-bold text-lg leading-5">{text}</h3>
      <p className="text-sm leading-4">{date}</p>
    </div>
  );
};

const Media = () => {
  return (
    <div className="media-bg mt-80">
      <Container className="px-3 xl:px-0 py-14 flex ">
        <div className="left w-1/2">
          <div className="w-[466px] aspect-[466/552]  absolute top-0 -translate-y-1/3">
          <MediaSlider/>
          </div>
        </div>
        <div className="right w-1/2 flex flex-col gap-y-10 text-right">
          <div className="text flex flex-col gap-y-5">
            <h2 className="font-inter text-[2rem] leading-10 text-white">
              Media Center
            </h2>
            <div className="headlines flex flex-col gap-y-8">
              <Li
                text="Request for Quotation for 1 Desktop Computer"
                date="20th October, 2019"
              />
              <Li
                text="SDG's Related Work Done by WBB Trust from 2016"
                date="27th December, 2017"
              />
              <Li
                text="Watch the video on “I don’t do anything”"
                date="7th March, 2015"
              />
              <Li
                text="Request for Quotation for 1 Desktop Computer"
                date="20th October, 2019"
              />
            </div>
          </div>
          <div className="link">
            <CustomBtn
              text="View All"
              className="text-white border-white font-normal text-base py-1.5"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Media;
