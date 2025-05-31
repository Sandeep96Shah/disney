import React from "react";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { IoMdAdd, IoIosTv } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import HeaderItem from "./HeaderItem";
import companyLogo from "../assets/logo.svg";

const Header = () => {
  const menus = [
    { name: "HOME", icon: FaHome },
    { name: "SEARCH", icon: FaSearch },
    { name: "WATCH LIST", icon: IoMdAdd },
    { name: "ORIGINALS", icon: FaStar },
    { name: "MOVIES", icon: IoIosTv },
    { name: "SERIES", icon: RiMovieFill },
  ];
  return (
    <div className="flex items-center !p-5 justify-between">
      <div className="flex items-center gap-12">
        <img src={companyLogo} className="w-[80px] h-[80px] object-contain" />
        <div className="flex items-center gap-8">
          {menus.map(({ name, icon }) => (
            <HeaderItem key={name} name={name} Icon={icon} />
          ))}
        </div>
      </div>
      <img src={companyLogo} className="w-[80px] h-[80px] object-contain" />
    </div>
  );
};

export default Header;
