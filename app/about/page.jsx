import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-3xl px-4 py-8 bg-white rounded-lg shadow-md hover:shadow-xl">
        <h1 className="text-3xl font-bold text-center text-teal-300">About Us</h1>
        <p className="text-gray-600 mt-4 text-center">
          Our website allows you to find GitHub users and view their profiles. Discover avatars, names, and bio information of GitHub users, along with some of their notable repositories. Explore their contributions and connect with developers from around the world. Uncover shared interests and follow their journey. Start exploring GitHub user profiles now!
        </p>
      </div>
    </div>
  );
};

export default Page;
