"use client";

import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      {/* Text */}
        <p className="text-teal-400 text-center pt-6 hover:text-teal-600 transition-colors duration-200 ease-out">
          © 2023 All Rights Reserved
        </p>
      {/* Social Icons only 1 */}
      <div className="flex justify-end pb-4">
        <div className="flex justify-center ">
          <Link
            href="https://www.linkedin.com/in/saurav-pant"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 text-black hover:text-teal-300 transition-colors duration-200 ease-out "
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href="https://www.github.com/Saurav-Pant"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4  text-black hover:text-teal-300
            transition-colors duration-200 ease-out
            "
          >
            <FiGithub size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
