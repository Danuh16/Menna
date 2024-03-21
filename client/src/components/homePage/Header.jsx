import React from "react";
import Logo from "../../assets/homePage/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="container mx-auto flex flex-col items-center">
        <div className="bg-[#77D7D3] w-full h-16 relative flex justify-center gap-44">
          <div className="flex gap-5 items-center mr-[10rem]">
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360]"
                icon={faPhone}
              />
              <span className="break-words font-['Work_Sans'] font-normal text-sm text-[#126360]">
                +01 569 896 654
              </span>
            </div>
            <div className="flex flex-row gap-2 ">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360] "
                icon={faEnvelope}
              />
              <span className="break-words font-['Work_Sans'] font-normal text-sm text-[#126360]">
                info@charity.com
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center mr-[8rem] bg-[#45cec7] w-44 justify-center">
            <div className="flex flex-row gap-4">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360]"
                icon={faInstagram}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360]"
                icon={faFacebook}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360]"
                icon={faTwitter}
              />
            </div>
            <div className="flex flex-row gap-4">
              <FontAwesomeIcon
                className="w-4 h-4 text-[#126360]"
                icon={faPinterest}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] w-full relative flex flex-col justify-between pl-36">
          <div className="flex justify-center items-center w-full md:w-[80%] mt-4 gap-10">
            <div className="flex items-center">
              <img className="w-auto h-20 pr-2" src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-row justify-between items-center gap-2 pl-16 font-semibold ">
              <span className="text-sm text-[#2E4049] block pb-1">Home</span>
              <span className="text-sm text-[#c0ccd1] px-1">|</span>
              <span className="text-sm text-[#2E4049] block pb-1">
                About Us
              </span>
              <span className="text-sm text-[#c0ccd1] px-1">|</span>
              <span className="text-sm text-[#2E4049] block pb-1">Pages</span>
              <span className="text-sm text-[#c0ccd1] px-1">|</span>
              <span className="text-sm text-[#2E4049] block pb-1">Event</span>
              <span className="text-sm text-[#c0ccd1] px-1">|</span>
              <span className="text-sm text-[#2E4049]">Contact</span>
              <button className="rounded-[2.1rem] bg-[#FF6D6D] px-4 py-2 ml-4 text-sm font-['Work_Sans'] font-medium text-white uppercase">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
