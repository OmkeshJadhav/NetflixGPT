import React, { useEffect } from "react";
import { netflixLogo, userIcon } from "../utils/constants";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../data/userSlice";
import { toggleGptSearchView } from "../data/gptSlice";
import logo2 from "../assets/logo2.png";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const user = useSelector((appStore) => appStore.user);
  const userName = user?.displayName;

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        <p>{error}</p>;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser()); // removeUser is blank as no action
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between z-10">
      <div>
        <img src={logo2} alt="logo" className="w-36 p-2 mx-auto md:mx-0" />
      </div>

      {user && (
        <div className="flex justify-evenly md:justify-evenly">
          <div className="sm:mt-0 md:mt-5 mx-auto py-2 ">
            <button
              className="bg-red-600 p-2 text-white rounded-md font-bold"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "🔍 GPT Search"}
            </button>
          </div>
          <div>
            <div className="flex md:p-4">
              <img
                id="dropdownDefaultButton"
                src={userIcon}
                alt="userIcon"
                className="hidden md:inline-block w-12 h-12 cursor-pointer mx-4 my-2 rounded-md"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute bg-black opacity-80 text-white mt-14 w-40 right-2 p-2 m-2 rounded-lg shadow-lg">
                  <ul>
                    <div className="">Hey {userName}👋 </div>
                    <button onClick={handleSignout}>Sign out</button>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;