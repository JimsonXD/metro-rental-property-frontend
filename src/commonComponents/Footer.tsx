import React from "react";
import Metrologo from "../assets/Metrologo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white p-5">
        <div className="flex items-center justify-center text-center py-8">
          <img src={Metrologo} alt="Metro Logo" className="w-58 h-28 m-2" />
        </div>

        <p className="flex items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
            fill="none"
            viewBox="0 0 15 7"
            stroke="currentColor"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              size="sm"
              className="text-turnersred group-hover:text-white transition-colors duration-700"
            />
          </svg>
          Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand
          <br />
          <br />
          Metro NZ Property Management has offices conveniently located
          <br />
          in Central Auckland but operates throughout New Zealand and
          <br />
          also internationally
        </p>
        <br />
        <br />
        <p className="flex items-center justify-center">
          09 391 4642 | +64 21 642 119 | info@metronz.co.nz
        </p>
      </div>

      <div className="footer-section bg-black text-red-600">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-4">
            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-200"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="sm"
                    className="text-red100 group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-red100 group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    size="sm"
                    className="text-red100 group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-red100 group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="sm"
                    className="text-red100 group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred100 group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="sm"
                    className="text-red100 group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
