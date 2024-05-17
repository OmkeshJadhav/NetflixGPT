import React, { useEffect } from "react";
import { netflixLogo, userIcon } from "../utils/constants";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../data/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const user = useSelector((appStore) => appStore.user);
  const userName = user?.displayName;

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
    <div className="w-full bg-gradient-to-b from-black absolute flex justify-between z-10">
      <img src={netflixLogo} alt="netflixLogo" className="w-52 p-4" />

      <div className="flex p-4">
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
  );
};

export default Header;
