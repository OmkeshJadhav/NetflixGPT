import { useRef, useState } from "react";
import Header from "./Header";
import { backgroundImage } from "../utils/constants";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../data/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


const Signin = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setSignInForm(!signInForm);
  };

  const handleButtonClick = () => {
    const errMessage = checkValidData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(errMessage);

    if (errMessage) return; // if error message is there then don't go ahead with sign in/up just return/terminate.

    if (!signInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Sign Up Logic
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.errMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
          className="absolute h-screen w-screen object-cover"
        />
      </div>
      <div className="w-3/4 sm:w-1/2 md:w-3/12 relative mx-auto my-24 md:my-28 pr-4 bg-black bg-opacity-80 rounded-lg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="text-white p-8 pb-12"
        >
          <h1 className="font-bold text-3xl my-3">
            {signInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!signInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10 required:"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 my-5 border border-gray-400 rounded-md w-full bg-black bg-opacity-10"
          />
          <button
            className="p-2 m-2 my-5 border-2 bg-red-500 border-red-500 rounded-md w-full font-bold"
            onClick={handleButtonClick}
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-500 p-2">{errorMessage}</p>
          <p
            className="text-center cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {signInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a User ? Sign In Now"}
          </p>
          <div className="mt-4 text-center">
            <p>Login : User001@gmail.com</p>
            <p>Password : User@001</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
