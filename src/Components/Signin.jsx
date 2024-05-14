import React, { useState } from "react";
import Header from "./Header";
import { backgroundImage } from "../utils/constants";

const Signin = () => {
  const [signInForm, setSignInForm] = useState(true);

  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div className="absolute w-screen">
      <div>
        <Header />
      </div>
      <div>
        <img
          src={backgroundImage}
          alt="background"
          className="absolute h-screen w-screen"
        />
      </div>
      <div className=" w-3/12 relative mx-auto my-32 bg-black bg-opacity-80 rounded-lg">
        <form className="text-white p-8">
          <h1 className="font-bold text-3xl my-3">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <button className="p-2 m-2 my-5 border-2 bg-red-500 border-red-500 rounded-md w-full font-bold">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-center cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {signInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a User ? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
