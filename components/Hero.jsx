"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setInput("");
      });
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg-gray-100 h-screen pt-40 ">
      <div className="flex justify-center items-center">
        <form action="">
          <input
            type="text"
            className="border border-gray-300 rounded-lg 
          hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300-200 
          p-2 mr-2"
            placeholder="Search for a user"
            onChange={handleInput}
          />
          <button
            className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors ease-in-out shadow-2xl"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
      {users.message ? (
        <h1
          className="text-center text-7xl mt-44 animate-bounce transition-all ease-in-out duration-500
         text-teal-300"
        >
          {users.message}
        </h1>
      ) : (
        <div className="flex flex-col items-center justify-center mt-32">
          {users.html_url ? (
            <Link
              href={users.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={users.avatar_url}
                alt=""
                className="rounded-full w-40 h-40"
              />
            </Link>
          ) : (
            <img
              src={users.avatar_url}
              alt=""
              className="rounded-full w-40 h-40"
            />
          )}

          <h1 className="text-2xl font-bold mt-4">{users.name}</h1>
          <p className="text-gray-500 mt-2">{users.bio}</p>
          <div className="flex mt-4">
            <div className="flex flex-col items-center justify-center mr-4"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
