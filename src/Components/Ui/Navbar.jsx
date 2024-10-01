import React from "react";
import "flowbite";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-slate-700 flex justify-between px-10 items-center w-full sticky top-0 z-10">
      <div className="">
        <img src={logo} alt="Rentpal logo" className="w-[4rem]" />
      </div>
      <nav className="flex items-center justify-start">
      <div className="flex gap-2">
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Sell</a>
      </div>
      <input type="text" placeholder="Search.." className=""/>
      </nav>
      <div className="flex items-center gap-2 justify-end flex-2">
        <p>Jayash Shrestha</p>
        <a href="#" className="px-3 py-2 bg-black rounded-full text-white">J</a>
        <FaChevronDown />
      </div>
    
    </header>
  );
};

export default Navbar;
