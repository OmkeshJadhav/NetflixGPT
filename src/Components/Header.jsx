import React from "react";
import { netflixLogo } from "../utils/constants";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black absolute z-10">
      <img src={netflixLogo} alt="netflixLogo" className="w-52 p-4" />
    </div>
  );
};

export default Header;
