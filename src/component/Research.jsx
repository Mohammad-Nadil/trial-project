import React from "react";
import HeadingText from "./layer/HeadingText";
import Container from "./layer/Container";
import CustomBtn from "./layer/CustomBtn";
import pic from "../assets/research.png";
import { motion } from "framer-motion"; // Import Framer Motion

const HighP = ({ text }) => {
  return (
    <p className="font-inter font-bold text-lg sm:text-2xl xl:text-3xl  2xl:text-[2.125rem] leading-6 sm:leading-10 py-2.5 px-3.5 bg-[#E7E7E7]/50">
      {text}
    </p>
  );
};

const Research = () => {
  return (
    <div className="xl:pt-32 md:pt-24 pt-16 overflow-x-hidden">
      <HeadingText text="Research & Publication" />
      <Container className="flex px-3 xl:px-0 xl:p-0">
        <div className="leaf p-5 lg:p-0 w-full lg:w-1/2 flex flex-col xl gap-y-10 2xl:gap-y-16 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="head flex flex-col text-white lg:text-black gap-y-3.5"
          >
            <h2 className="font-inter font-bold text-[2.0625rem] leading-10 w-96">
              WBB's Twenty Years Celebrating Book
            </h2>
            <p className="font-inter text-sm sm:text-base">
              It started with a simple idea: everyone has something that they
              can contribute to make their country better. Let’s encourage
              people to play a positive role. In the beginning, back in 1998,
              WBB Trust consisted of a handful of people who worked on tobacco
              control and on the polythene bag ban. Since then we have evolved
              to have about twenty staff working in three departments: Health
              Rights, Livable Cities, and Economic & Social Justice. Our focus
              on encouraging a positive outlook and involving many people in the
              work has continued. Download
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="highlight flex flex-col gap-y-4 md:gap-y-8 2xl:gap-y-10"
          >
            <HighP text="“Tobacco Company Intervention, Major Obstacles to Tobacco Control”" />
            <HighP text="Expansion of tobacco cultivation and influence of the company" />
            <HighP text="Expansion of tobacco cultivation and influence of the company" />
          </motion.div>
          <div>
            <CustomBtn text="View All" className="font-normal !bg-white/50 " />
          </div>
        </div>
        <motion.div className="right absolute h-full w-full -z-10 lg:static lg:w-1/2 blur-[3px] lg:blur-none">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute h-full w-full"
          >
            <img className="w-full h-full lg:ml-14" src={pic} alt="Research" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Research;
