import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  window.addEventListener("scroll", scrollToSearch);
  function dropHandler() {
    setMenuVisibility(!menuVisibility);
  }
  function scrollToSearch() {
    if (window.scrollY >= 190) {
      setSearchVisibility(true);
    } else {
      setSearchVisibility(false);
    }
  }
  return (
    <header className="flex justify-between px-10 items-center w-full max-w-[1440px] sticky top-0 z-10 drop-shadow-md bg-slate-50">
      <div className="flex:1">
        <img src={logo} alt="Rentpal logo" className="w-[4rem]" />
      </div>
      <nav className="hidden lg:flex items-center justify-between md:space-x-10 flex:3 ml-8">
        <div className="flex gap-2">
          <Link to="/">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/sell">Sell</Link>
        </div>
      </nav>
      {searchVisibility && (
        <form className="w-[35rem] lg:ml-40  invisible md:visible ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your products..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      )}
      <div className="flex items-center justify-end gap-2 flex-1">
        <p>Jayash Shrestha</p>
        <a href="#" className="px-3 py-2 bg-black rounded-full text-white">
          J
        </a>
        <button className="lg:hidden " onClick={dropHandler}>
          <FaChevronDown />
        </button>
        <Link to='/cart'>
         <IoCart size={26} />
        </Link>
      </div>

      <div
        className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-3 font-semibold tex-xl transform-transition ${
          menuVisibility ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <Link
          to="/rent"
          className="w-full text-center p-4 hover:bg-[#DC143C] transition-all cursor-pointer"
        >
          Rent
        </Link>
        <Link
          to="#"
          className="w-full text-center p-4 hover:bg-[#DC143C] transition-all cursor-pointer"
        >
          Buy
        </Link>
        <Link
          to="/sell"
          className="w-full text-center p-4 hover:bg-[#DC143C] transition-all cursor-pointer"
        >
          Sell
        </Link>
        <Link to='/cart' className="w-full text-center p-4 hover:bg-[#DC143C] transition-all cursor-pointer" >
          Go to cart
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
