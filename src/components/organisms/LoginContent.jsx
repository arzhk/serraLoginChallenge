import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, setType, setText } from "../../reducers/toasts";
import { setLoggedIn } from "../../reducers/user";
import { Link } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import EmailIcon from "../../assets/icons/mail.svg";
import LockIcon from "../../assets/icons/lock.svg";
import { useNavigate } from "react-router-dom";

function LoginContent({ inputData, inputHandler }) {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = inputData;

  const loginHandler = (e) => {
    e.preventDefault();
    const emailMatch = email === user?.registeredAccount?.email;
    const passwordMatch = password === user?.registeredAccount?.password;

    setLoading(true);

    if (emailMatch && passwordMatch) {
      setTimeout(() => {
        dispatch(setLoggedIn(true));

        dispatch(toggle(true));
        dispatch(setType("success"));
        dispatch(setText("Logged In!"));

        navigate("/");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        dispatch(toggle(true));
        dispatch(setType("error"));
        dispatch(setText("Incorrect username/password"));
      }, 1000);
    }
  };

  return (
    <div className="container">
      <Title text="Login" />
      <form onSubmit={loginHandler} type="submit" style={{ margin: "10px 0px 30px 0px", width: "100%", maxWidth: 360 }}>
        <Input placeholder="E-Mail Address" type="email" icon={EmailIcon} value={email} onChange={inputHandler} />
        <Input placeholder="Password" type="password" icon={LockIcon} value={password} onChange={inputHandler} />
        <PrimaryButton text={loading ? "Loading..." : "Log In"} type="submit" />
      </form>

      <p style={{ margin: "20px 0px 16px 0px" }}>
        Don't have an acccount yet? <Link to="/register">Signup</Link>
      </p>
      <p>Don't remember your password? Recover my Password</p>
    </div>
  );
}

export default LoginContent;
