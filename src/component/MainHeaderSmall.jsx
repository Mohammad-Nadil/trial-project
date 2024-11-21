import React, { useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { FaAngleDown, FaBars } from "react-icons/fa";
import "../App.css";
import { IoClose } from "react-icons/io5";

const Li = ({ text, href, children, className, icon, onClick }) => {
  return (
    <li
      
      className={`text-base font-inter text-white relative transition-all duration-300  border-b border-gray-700 `}
    >
      <Link
        to={href} onClick={onClick}
        className={`flex !flex-row !items-center gap-x-4 py-3 px-5  ${className}`}
      >
        {text} {icon}
      </Link>
      {children}
    </li>
  );
};

const MainHeaderSmall = () => {
  let [menu, setMenu] = useState(false);
  let [weDo, setWeDo] = useState(false);
  let [support, setSupport] = useState(false);
  let [network, setNetwork] = useState(false);
  let [training, setTraining] = useState(false);
  let [health, setHealth] = useState(false);
  let [economics, setEconomics] = useState(false);
  let [city, setCity] = useState(false);
  let [involved, setInvolved] = useState(false);

  // const [activeDropdown, setActiveDropdown] = useState(null);
  // const toggleDropdown = (dropdownName) => {
  //   setActiveDropdown((preview) =>
  //     preview === dropdownName ? null : dropdownName
  //   );
  // };

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
    trainingnetwork: "/",
    accommodation: "/",
    meetingRoom: "/",
    dining: "/",
    areaInfo: "/",
    contactUs: "/",
    conference: "/",
  };

  return (
    <div>
      <Container className="bg-black flex justify-between items-center py-2 px-3 xl:px-0">
        <div className="logo w-1/2 sm:w-1/3">
          <img className=" w-full aspect-[335/100]" src={logo} alt={logo} />
        </div>
        <div className="menu font-inter">
          <button
            className="text-white text-2xl "
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoClose /> : <FaBars />}
          </button>
          <ul
            className={`absolute top-full right-0 w-full sm:w-1/2 z-50 bg-[#252525ee] flex flex-col duration-300 overflow-y-auto scroll-y-auto scrollbar-hide ${
              menu ? " opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <Li text="Home" href={links.home} />
            <Li text="About Us" href={links.aboutUs} />
            <Li
              text="What We Do "
              className="flex flex-col-reverse !items-start !justify-start w-full"
              icon={<FaAngleDown />}
              href={links.whatWeDo}
              onClick={() => setWeDo(!weDo)}
            >
              <div
                className={` duration-300 pl-5 ${
                  weDo ? " opacity-100 h-auto" : "opacity-0 h-0 "
                }`}
              >
                <ul>
                  <Li
                    text="Health Rights"
                    className="flex flex-col-reverse !items-start !justify-start w-full"
                    icon={<FaAngleDown />}
                    onClick={() => setHealth(!health)}
                    href={links.healthRights}
                  >
                    <div
                      className={` duration-300 pl-5 ${
                        health ? " opacity-100 h-auto" : "opacity-0 h-0 "
                      }`}
                    >
                      <ul>
                        <Li text="Health Policy" href={links.healthPolicy} />
                        <Li
                          text="Non-Communicable Diseases (NCD)"
                          href={links.ncd}
                        />
                        <Li
                          text="Tobacco Control"
                          href={links.tobaccoControl}
                        />
                      </ul>
                    </div>
                  </Li>
                  <Li
                    text="Economic & Social Justice"
                    className="flex flex-col-reverse !items-start !justify-start w-full"
                    icon={<FaAngleDown />}
                    onClick={() => setEconomics(!economics)}
                    href={links.economicSocialJustice}
                  >
                    <div
                      className={` duration-300 pl-5 ${
                        economics ? " opacity-100 h-auto" : "opacity-0 h-0 "
                      }`}
                    >
                      {" "}
                      <ul>
                        <Li
                          text="Ensure Our Rights"
                          href={links.ensureRights}
                        />
                        <Li text="Gender" href={links.gender} />
                      </ul>
                    </div>
                  </Li>
                  <Li
                    text="Livable Cities"
                    className="flex flex-col-reverse !items-start !justify-start w-full"
                    icon={<FaAngleDown />}
                    onClick={() => setCity(!city)}
                    href={links.livableCities}
                  >
                    <div
                      className={` duration-300 pl-5 ${
                        city ? " opacity-100 h-auto" : "opacity-0 h-0 "
                      }`}
                    >
                      {" "}
                      <ul>
                        <Li text="Environment" href={links.environment} />
                        <Li
                          text="Urban Structure"
                          href={links.urbanStructure}
                        />
                        <Li
                          text="Healthy and Safe Travel"
                          href={links.healthyTravel}
                        />
                        <Li
                          text="Water and Sanitation"
                          href={links.waterSanitation}
                        />
                      </ul>
                    </div>
                  </Li>
                  <Li
                    text="Get Involved"
                    className="flex flex-col-reverse !items-start !justify-start w-full"
                    icon={<FaAngleDown />}
                    onClick={() => setInvolved(!involved)}
                    href={links.getInvolved}
                  >
                    <div
                      className={` duration-300 pl-5 ${
                        involved ? " opacity-100 h-auto" : "opacity-0 h-0 "
                      }`}
                    >
                      <ul>
                        <Li text="Internships" href={links.internships} />
                        <Li text="Volunteering" href={links.volunteering} />
                      </ul>
                    </div>
                  </Li>
                </ul>
              </div>
            </Li>
            <Li text="News & Articles" href={links.news} />
            <Li text="Research / Publications" href={links.publications} />
            <Li
              text="Support"
              className="flex flex-col-reverse !items-start !justify-start w-full"
              icon={<FaAngleDown />}
              href={links.support}
              onClick={() => setSupport(!support)}
            >
              <div
                className={` duration-300 pl-5 ${
                  support ? " opacity-100 h-auto" : "opacity-0 h-0 "
                }`}
              >
                <ul>
                  <Li
                    text="Our Network"
                    className="flex flex-col-reverse !items-start !justify-start w-full"
                    icon={<FaAngleDown />}
                    href={links.ourNetwork}
                    onClick={() => setNetwork(!network)}
                  >
                    <div
                      className={` duration-300 pl-5 ${
                        network ? " opacity-100 h-auto" : "opacity-0 h-0 "
                      }`}
                    >
                      <ul>
                        <Li
                          text="National Network"
                          href={links.nationalNetwork}
                        />
                        <Li
                          text="International Network"
                          href={links.internationalNetwork}
                        />
                      </ul>
                    </div>
                  </Li>
                  <Li text="Partner" href={links.partner} />
                </ul>
              </div>
            </Li>
            <Li
              text="Training network"
              className="flex flex-col-reverse !items-start !justify-start w-full"
              icon={<FaAngleDown />}
              onClick={() => setTraining(!training)}
              href={links.trainingnetwork}
            >
              <div
                className={` duration-300 pl-5 ${
                  training ? " opacity-100 h-auto" : "opacity-0 h-0 "
                }`}
              >
                <ul>
                  <Li text="Accommodation" href={links.accommodation} />
                  <Li text="Meeting Room" href={links.meetingRoom} />
                  <Li text="Dining" href={links.dining} />
                  <Li text="Area Information" href={links.areaInfo} />
                </ul>
              </div>
            </Li>
            <Li text="Contact Us" href={links.contactUs} />
            <Li text="Conference" href={links.conference} />
          </ul>
          <div
            onClick={() => setMenu(false)}
            className={`overlay absolute top-full left-0 w-screen h-screen bg-[#0000004d] z-40 ${
              menu ? "visible" : "invisible"
            }`}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeaderSmall;
