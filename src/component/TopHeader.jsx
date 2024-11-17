import React from "react";
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
    <div className="top bg-primary">
      <Container className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4">
        <div className="text text-white font-inter">
          <p className="font-bold  lg:text-xl">Change Needs Social Movement</p>
        </div>
        <div className="link">
          <ul className="flex gap-x-1.5">
            {links.map((item, index) => (
              <li
                className={` text-xs sm:text-sm font-inter text-white relative transition-all duration-300`}
                key={index}
              >
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
