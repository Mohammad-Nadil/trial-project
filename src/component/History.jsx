import React from "react";
import Container from "./layer/Container";
import history from "/history.png";
import CustomBtn from "./layer/CustomBtn";
import { motion } from "framer-motion";

const History = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="pt-32 flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="left w-1/2"
        >
          <img src={history} alt={history} />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          className="right w-1/2 flex flex-col gap-y-9 pl-9 pt-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            className="text flex flex-col gap-y-4 text-[#2B2B2B] font-inter"
          >
            <h2 className="font-bold text-[2rem] leading-[2.4375rem]">
              History and Achievements
            </h2>
            <p className="leading-8">
              Work for a Better Bangladesh (WBB) Trust was founded in December
              1998. The initial programs of WBB Trust were tobacco control and
              environment (discouraging polythene shopping bags and addressing
              noise pollution). Over the years, WBB Trust added a program on
              gender (now under Economic and Social Justice). Our tobacco
              control program is now subsumed under Health Rights, with a
              broader focus on non-communicable diseases. Our environment work
              is now subsumed under Livable Cities, with a focus on urban
              environments.Details
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            className="link"
          >
            <CustomBtn text="Details" />
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default History;
