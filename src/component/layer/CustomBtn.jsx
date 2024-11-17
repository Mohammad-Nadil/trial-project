import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CustomBtn = ({ text, className , href }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        backgroundColor: "#008645",
        color: "#ffffff",
        boxShadow: "0px 8px 15px rgba(0, 134, 69, 0.3)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${className} border text-[#008645] border-[#008645] p-2.5 font-inter font-bold text-2xl leading-7`}
    >
      <Link to={href} >{text}</Link>
    </motion.button>
  );
};

export default CustomBtn;
