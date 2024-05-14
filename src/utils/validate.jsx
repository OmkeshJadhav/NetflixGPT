const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) return "Enter valid Email Address";
  if (!isPasswordValid)
    return "Password should contain at least 8 characters with both lower and uppercase letters, at least one number and one special character";

  return null;
};

export default checkValidData;
