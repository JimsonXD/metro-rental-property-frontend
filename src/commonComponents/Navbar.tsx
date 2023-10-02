/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Metrologo from "../assets/Metrologo.png";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={Metrologo} alt="Metro Logo" className="w-30 h-12 m-2" />
          </Link>

          <ul className="hidden lg:flex space-x-8 ">
          <li className="hover:border-b-4 hover:border-red300">
              <Link
                to="/"
                className="no-underline rounded hover:text-red300 text-black "
              >
                Home
              </Link>
            </li>

            <li className="relative hover:border-b-4 hover:border-red300">
              <Link
                to="#"
                className="no-underline py-2 rounded hover:text-red300 text-black"
              >
                Services
              </Link>
              <svg
                onClick={toggleDropdown}
                className="w-4 h-4 inline-block ml-2 -mt-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 7.293a1 1 0 011.414 0L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {isDropdownOpen && (
                <ul className="absolute py-4 border rounded shadow-lg flex flex-col justify-center text-align-center ">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-red300 hover:text-white text-black no-underline mr-8"
                    >
                      Page1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rental-property-search"
                      className="block px-4 py-2  hover:bg-red300 hover:text-white  text-black no-underline mr-8"
                    >
                      Page2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/property-details"
                      className="block px-4 py-2  hover:bg-red300 hover:text-white  text-black no-underline mr-8"
                    >
                      Page3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-tenancy-application"
                      className="block px-4 py-2 hover:bg-red300 hover:text-white  text-black no-underline mr-8"
                    >
                      Page4
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/application"
                      className="block px-4 py-2 hover:bg-red300 hover:text-white  text-black no-underline mr-8"
                    >
                      Page5
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/confirmation-details"
                      className="block px-4 py-2 hover:bg-red300 hover:text-white  text-black no-underline mr-8"
                    >
                      Page6
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:border-b-4 hover:border-red300">
              <Link
                to="/news"
                className="no-underline hover:bg-red hover:bg-opacity-50 py-2 rounded hover:text-red300 text-black"
              >
                News
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-red300">
              <Link
                to="/about-us"
                className="no-underline hover:bg-red hover:bg-opacity-50 py-2 rounded hover:text-red200 text-black"
              >
                About Us
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-red300">
              <Link
                to="/contact"
                className="no-underline hover:bg-red hover:bg-opacity-50 py-2 rounded hover:text-red200 text-black"
              >
                Contact
              </Link>
            </li>
            <li className="hover:border-b-4 hover:border-red300">
              <Link
                to="/sign-in"
                className="no-underline hover:bg-red hover:bg-opacity-50 py-2 rounded hover:text-red200 text-black"
              >
                Sign In
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/" className="no-underline">
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <Link to="/page1">Page1</Link>
                </li>
                <li>
                  <Link to="/rental-property-search">Page2</Link>
                </li>
                <li>
                  <Link to="/property-details">Page3</Link>
                </li>
                <li>
                  <Link to="/my-tenancy-application">Page4</Link>
                </li>
                <li>
                  <Link to="/application">Page5</Link>
                </li>
                <li>
                  <Link to="/confirmation-details">Page6</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/news" className="no-underline">
              News
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="no-underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="no-underline">
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      <SearchBar />
    </nav>
  );
};

export default Navbar;
