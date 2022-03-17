import React, { useState, useEffect } from "react";
import RegistrationContent from "../components/organisms/RegistrationContent";
import { useSelector } from "react-redux";

function Register() {
  const [inputData, setInputData] = useState({ email: "", password: "", confirmPassword: "" });
  const user = useSelector((state) => state.user);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user.userData.email) setInputData({ ...inputData, email: user.userData.email });
  }, [inputData.email]);

  return <RegistrationContent inputHandler={inputHandler} inputData={inputData} />;
}

export default Register;
