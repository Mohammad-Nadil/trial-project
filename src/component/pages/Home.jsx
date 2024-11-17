import React from "react";
import Container from "../layer/Container";
import Banner from "../Banner";
import History from "../History";

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Container>
        <History/>
      </Container>
    </div>
  );
};

export default Home;
