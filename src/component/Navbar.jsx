import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import MainHeaderSmall from "./MainHeaderSmall";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "linear" }}
          className=""
        >
          <TopHeader />
        </motion.div>
        <AnimatePresence mode="wait">
          {windowWidth >= 1280 ? (
            <motion.div
              key="mainHeader"
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <MainHeader />
            </motion.div>
          ) : (
            <motion.div
              key="mainHeaderSmall"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <MainHeaderSmall />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
