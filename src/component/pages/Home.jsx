import React from "react";
import Container from "../layer/Container";
import Banner from "../Banner";
import History from "../History";
import ActivitySlider from "../ActivitySlider";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Container className="px-3 overflow-hidden">
        <History />
      </Container>
      <ActivitySlider/>
    </div>
  );
};

export default Home;
