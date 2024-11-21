import React, { useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "../App.css";

const Li = ({ text, href, children, className, icon, onClick, linkClass }) => {
  return (
    <li
      onClick={onClick}
      className={`text-[13.5px] font-inter text-white relative transition-all duration-300  ${className}`}
    >
      <Link
        to={href}
        className={` py-2 px-2.5 flex items-center gap-x-2 ${linkClass}`}
      >{text} {icon}
        
      </Link>
      {children}
    </li>
  );
};

const MainHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let [menu, setMenu] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((preview) =>
      preview === dropdownName ? null : dropdownName
    );
  };

  // Links object for paths
  const links = {
    home: "/",
    aboutUs: "/",
    whatWeDo: "/",
    healthRights: "/",
    healthPolicy: "/",
    ncd: "/",
    tobaccoControl: "/",
    economicSocialJustice: "/",
    ensureRights: "/",
    gender: "/",
    livableCities: "/",
    environment: "/",
    urbanStructure: "/",
    healthyTravel: "/",
    waterSanitation: "/",
    getInvolved: "/",
    internships: "/",
    volunteering: "/",
    news: "/",
    support: "/",
    ourNetwork: "/",
    nationalNetwork: "/",
    internationalNetwork: "/",
    partner: "/",
    trainingFacilities: "/",
    accommodation: "/",
    meetingRoom: "/",
    dining: "/",
    areaInfo: "/",
    contactUs: "/",
    conference: "/",
  };

  return (
    <>
      <div className="main bg-black">
        <Container className="flex justify-between items-center px-3  py-3 font-inter">
          <div className="logo">
            <img className=" w-full " src={logo} alt={logo} />
          </div>
          <div className="menu morph font-inter">
            <ul className={` xl:flex  gap-x-1`}>
              <Li text="Home" href={links.home} />
              <Li text="About Us" href={links.aboutUs} />
              <Li
                text="What We Do "
                icon={<FaAngleDown />}
                href={links.whatWeDo}
                className="gap-x-3"
                onClick={() => toggleDropdown("whatWeDo")}
              >
                <ul
                  className={`absolute w-60 top-full bg-[#202020ee] rounded-md   duration-300 flex flex-col gap-y-2 z-50 p-2 ${
                    activeDropdown === "whatWeDo"
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <Li
                    text="Health Rights  "
                    icon={<FaAngleRight />}
                    href={links.healthRights}
                    className=" group"
                    linkClass="gap-x-3"
                  >
                    <ul className="absolute w-60 top-0 left-full translate-x-2 bg-[#202020ee] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible hover:opacity-100 duration-300 flex flex-col gap-y-2 z-50 p-2">
                      <Li text="Health Policy" href={links.healthPolicy} />
                      <Li
                        text="Non-Communicable Diseases (NCD)"
                        href={links.ncd}
                      />
                      <Li text="Tobacco Control" href={links.tobaccoControl} />
                    </ul>
                  </Li>
                  <Li
                    text="Economic & Social Justice"
                    href={links.economicSocialJustice}
                    icon={<FaAngleRight />}
                    className=" group"
                    linkClass="gap-x-3"
                  >
                    <ul className="absolute w-60 top-0 left-full translate-x-2 bg-[#202020ee] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible hover:opacity-100 duration-300 flex flex-col gap-y-2 z-50 p-2">
                      <Li text="Ensure Our Rights" href={links.ensureRights} />
                      <Li text="Gender" href={links.gender} />
                    </ul>
                  </Li>
                  <Li
                    text="Livable cities"
                    href={links.livableCities}
                    icon={<FaAngleRight />}
                    className=" group"
                    linkClass="gap-x-3"
                  >
                    <ul className="absolute w-60 top-0 left-full translate-x-2 bg-[#202020ee] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible hover:opacity-100 duration-300 flex flex-col gap-y-2 z-50 p-2">
                      <Li text="Environment" href={links.environment} />
                      <Li text="Urban Structure" href={links.urbanStructure} />
                      <Li
                        text="Healthy and Safe Travel"
                        href={links.healthyTravel}
                      />
                      <Li
                        text="Water and Sanitation"
                        href={links.waterSanitation}
                      />
                    </ul>
                  </Li>
                  <Li
                    text="Get Involved"
                    href={links.getInvolved}
                    icon={<FaAngleRight />}
                    className=" group"
                    linkClass="gap-x-3"
                  >
                    <ul className="absolute w-60 top-0 left-full translate-x-2 bg-[#202020ee] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible hover:opacity-100 duration-300 flex flex-col gap-y-2 z-50 p-2">
                      <Li text="Internships" href={links.internships} />
                      <Li text="Volunteering" href={links.volunteering} />
                    </ul>
                  </Li>
                </ul>
              </Li>
              <Li text="News & Articles" href={links.news} />
              <Li
                text="Support "
                icon={<FaAngleDown />}
                href={links.support}
                className="gap-x-3"
                onClick={() => toggleDropdown("support")}
              >
                <ul
                  className={`absolute w-60 top-full bg-[#202020ee] rounded-md   duration-300 flex flex-col gap-y-2 z-50 p-2 ${
                    activeDropdown === "support"
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <Li
                    text="Our Network  "
                    icon={<FaAngleRight />}
                    href={links.ourNetwork}
                    className=" group"
                    linkClass="gap-x-3"
                  >
                    <ul className="absolute w-60 top-0 left-full translate-x-2 bg-[#202020ee] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:visible hover:opacity-100 duration-300 flex flex-col gap-y-2 z-50 p-2">
                      <Li
                        text="National Network"
                        href={links.nationalNetwork}
                      />
                      <Li
                        text="International Network"
                        href={links.internationalNetwork}
                      />
                    </ul>
                  </Li>
                  <Li text="Partner" href={links.partner} />
                </ul>
              </Li>
              <Li
                text="Training Facilities "
                icon={<FaAngleDown />}
                href={links.trainingFacilities}
                className="gap-x-3"
                onClick={() => toggleDropdown("training")}
              >
                <ul
                  className={`absolute w-60 top-full bg-[#202020ee] rounded-md   duration-300 flex flex-col gap-y-2 z-50 p-2 ${
                    activeDropdown === "training"
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <Li text="Accomodation" href={links.accommodation} />
                  <Li text="Meeting Room" href={links.meetingRoom} />
                  <Li text="Dinning" href={links.dining} />
                  <Li text="Area Information" href={links.areaInfo} />
                </ul>
              </Li>
              <Li text="Conference" href={links.conference} />
              <Li text="Contact Us" href={links.contactUs} />
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainHeader;
