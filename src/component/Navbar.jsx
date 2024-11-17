import React, { useState, useEffect } from "react";
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
        <TopHeader />
        {windowWidth >= 1280 ? <MainHeader /> : <MainHeaderSmall />}
      </nav>
    </>
  );
};

export default Navbar;
