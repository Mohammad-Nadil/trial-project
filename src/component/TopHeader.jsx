import React from "react";
import { motion } from "framer-motion";
import Container from "./layer/Container";
import { Link } from "react-router-dom";

const TopHeader = () => {
  let links = [
    { text: "Research .", link: "" },
    { text: "Publications .", link: "" },
    { text: "Networking .", link: "" },
    { text: "Advocacy ", link: "" },
  ];

  return (
    <motion.div className="top bg-primary">
      <Container className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 ">
        <motion.div
          className="text text-white font-inter"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className=" font-inter font-bold lg:text-xl tracking-wide">
            Change Needs Social Movement
          </p>
        </motion.div>
        <motion.div
          className="link"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                staggerChildren: 0.4,
                delayChildren: 0.4,
              },
            },
          }}
        >
          <ul className="flex gap-x-1.5">
            {links.map((item, index) => (
              <motion.li
                className={`text-xs sm:text-sm font-inter text-white relative transition-all duration-300`}
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to={item.link}>{item.text}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default TopHeader;
