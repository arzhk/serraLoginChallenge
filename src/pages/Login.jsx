import React, { useState, useEffect } from "react";
import LoginContent from "../components/organisms/LoginContent";
import { setUserData } from "../reducers/user";
import { useDispatch } from "react-redux";

function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.type]: e.target.value });
  };

  useEffect(() => {
    dispatch(setUserData(inputData));
  }, [inputData.email]);

  return <LoginContent inputHandler={inputHandler} inputData={inputData} />;
}

export default Login;
