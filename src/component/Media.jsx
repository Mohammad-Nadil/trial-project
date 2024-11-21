import React from "react";
import Container from "./layer/Container";
import CustomBtn from "./layer/CustomBtn";
import MediaSlider from "./layer/MediaSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Media = () => {
  let links = [
    {
      news: "Request for Quotation for 1 Desktop Computer",
      date: "20th October, 2019",
      link: "/",
    },
    {
      news: "SDG's Related Work Done by WBB Trust from 2016",
      date: "27th December, 2017",
      link: "/",
    },
    {
      news: "Watch the video on “I don’t do anything”",
      date: "7th March, 2015",
      link: "/",
    },
    {
      news: "Request for Quotation for 1 Desktop Computer",
      date: "20th October, 2019",
      link: "/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delayChildren: 0.5,
      },
    },
  };
  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="media-bg mt-80">
      <Container className="px-3 xl:px-0 py-14 flex flex-col lg:flex-row">
        <motion.div
          className="left w-full lg:w-1/2 aspect-[9/10]  sm:aspect-video lg:aspect-auto relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className=" w-72 sm:w-[466px] aspect-[466/552] absolute top-0 -translate-y-1/3">
            <MediaSlider />
          </div>
        </motion.div>
        <motion.div
          className="right w-full lg:w-1/2 flex flex-col gap-y-10 text-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="text flex flex-col gap-y-5"
            variants={headerVariants}
          >
            <h2 className="font-inter text-[2rem] leading-10 text-white">
              Media Center
            </h2>
          </motion.div>
          <div className="headlines flex flex-col gap-y-8">
            {links.map((item, index) => (
              <Link to={item.link} key={index}>
                <motion.div
                  className="font-inter text-white flex flex-col gap-y-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateX: -10 }}
                >
                  <h3 className="font-bold text-lg leading-5">{item.news}</h3>
                  <p className="text-sm leading-4">{item.date}</p>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="link">
            <CustomBtn
              text="View All"
              className="text-white border-white font-normal text-base py-1.5"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Media;
