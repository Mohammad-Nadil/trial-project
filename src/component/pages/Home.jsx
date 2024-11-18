import React from "react";
import Container from "../layer/Container";
import Banner from "../Banner";
import History from "../History";
import ActivitySlider from "../ActivitySlider";
import Research from "../Research";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <History />
      <ActivitySlider />
      <Research/>
    </div>
  );
};

export default Home;
