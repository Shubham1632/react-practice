import { setServers } from "dns";
import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

const HomePage = () => {
  const [message, setMessage] = useState<string | null>();
  const navigate = useNavigate();

  const handleChange = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    const value = input?.value;
    setMessage(value);
  };

  const search = () => {
    navigate(`/details/${message}`);
  };

  return (
    <div className="bg-gradient-to-r from-green-400  to-blue-500 ">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-blue md:text-5xl lg:text-6xl text-center p-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-700">
          Pokemon
        </span>{" "}
        API
      </h1>
      <div className="flex justify-center">
        <input
          className=" content-center  mb-2 text-sm font-medium w-80 p-3 rounded-md bg-sky-200 justify-center"
          type="text"
          name="search"
          id="search"
          placeholder="Enter the ID or Name"
          onClick={handleChange}
          defaultValue=""
        />
        <button
          onClick={search}
          className="bg-blue-300 hover:bg-blue-700 text-white font-bold px-4 rounded-md h-11 mx-3"
        >
          Search pokemon
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
