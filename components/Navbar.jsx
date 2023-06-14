"use client";

import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { ImFinder } from "react-icons/im";
import Link from "next/link";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow w-56
      hover:shadow-xl text-center">
        <p className="text-lg ">{message}</p>
        <button
          className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex justify-around items-center py-2 px-4">
      <div className="">
        <Link href="/">
          <ImFinder size={35} />
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-center items-center space-x-5 text-xl">
          <li className="text-teal-300 hover:text-teal-500 transition-colors duration-300 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="text-teal-300 hover:text-teal-500 transition-colors duration-300 ease-in-out">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={handleAlert}>
          <BsSun size={25} />
        </button>
      </div>
      {showAlert && (
        <CustomAlert message="Wait For It" onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Navbar;
