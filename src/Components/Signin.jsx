import React from "react";
import Header from "./Header";
import { backgroundImage } from "../utils/constants";
const Signin = () => {
  return (
    <div className="absolute w-screen">
      <div>
        <Header />
        <img
          src={backgroundImage}
          alt="background"
          className="absolute h-screen w-screen"
        />
      </div>
      <div className=" w-3/12 relative mx-auto my-32 bg-black bg-opacity-80 rounded-lg">
        <form className="text-white p-10">
          <h1 className="font-bold text-3xl my-4">Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            className="p-3 m-2 my-6 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-3 m-2 my-6 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <button className="p-2 m-2 my-6 border-2 bg-red-500 border-red-500 rounded-md w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
