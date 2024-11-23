import React, { useState } from "react";
import HeadingText from "./layer/HeadingText";
import Container from "./layer/Container";
import CustomBtn from "./layer/CustomBtn";
import pic from "../assets/research.png";
import { motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ id, title, text, isOpen, onToggle }) => {
  return (
    <div
      className={`${
        isOpen ? "bg-[#E7E7E7]/60 lg:bg-transparent" : "hover:bg-gray-300"
      }`}
    >
      <div
        className={`flex justify-between items-center p-2 sm:p-4 duration-300 cursor-pointer ${
          isOpen ? "lg:bg-none" : "bg-[#E7E7E7] hover:bg-gray-300"
        }`}
        onClick={() => onToggle(id)}
      >
        <h3 className="text-lg sm:text-xl md:text-[2.125rem] sm:leading-[2.375rem] font-inter font-bold">
          {title}
        </h3>
        <div>
          {isOpen ? (
            <FaMinus className="text-xs sm:text-base" />
          ) : (
            <FaPlus className="text-xs sm:text-base" />
          )}
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden px-6 py-4"
        >
          <p className="text-sm md:text-lg leading-7">{text}</p>
        </motion.div>
      )}
    </div>
  );
};

const Research = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  const accordions = [
    {
      id: 1,
      title: "WBB's Twenty Years Celebrating Book",
      text: "It started with a simple idea: everyone has something that they can contribute to make their country better. Let’s encourage people to play a positive role. In the beginning, back in 1998, WBB Trust consisted of a handful of people who worked on tobacco control and on the polythene bag ban. Since then we have evolved to have about twenty staff working in three departments: Health Rights, Livable Cities, and Economic & Social Justice. Our focus on encouraging a positive outlook and involving many people in the work has continued. Download",
    },
    {
      id: 2,
      title:
        "“Tobacco Company Intervention, Major Obstacles to Tobacco Control”",
      text: "Tobacco companies often pose major challenges to control measures, employing various strategies to undermine regulations. This document outlines the significant obstacles they create and how organizations can counteract them.",
    },
    {
      id: 3,
      title: "Expansion of tobacco cultivation and influence of the company",
      text: "This document explores the detrimental effects of the expansion of tobacco cultivation, emphasizing the role of corporate influence in shaping policies and public perception.",
    },
    {
      id: 4,
      title: "Addressing Tobacco’s Role in Society",
      text: "An analysis of tobacco's economic and social impact, focusing on its pervasive role and the steps required to mitigate its negative influence on communities.",
    },
  ];

  return (
    <div className="xl:pt-32 md:pt-24 pt-16 overflow-x-hidden px-3 2xl:px-0">
      <HeadingText text="Research & Publication" />
      <Container className="flex  2xl:px-0 xl:p-0">
      <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
  className="leaf p-5 lg:p-0 w-full lg:w-1/2 flex flex-col xl gap-y-10 2xl:gap-y-16"
>
  {accordions.map((accordion, index) => (
    <motion.div
      key={accordion.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5 + index * 0.3, // Adding stagger delay manually
      }}
      viewport={{ once: true }}
    >
      <Accordion
        id={accordion.id}
        title={accordion.title}
        text={accordion.text}
        isOpen={activeAccordion === accordion.id}
        onToggle={handleToggle}
      />
    </motion.div>
  ))}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + accordions.length * 0.3 }}
    viewport={{ once: true }}
  >
    <CustomBtn text="View All" className="font-normal !bg-white/50" />
  </motion.div>
</motion.div>
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
