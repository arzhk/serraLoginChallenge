import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle, setType, setText } from "../../reducers/toasts";
import { setRegisteredAccount } from "../../reducers/user";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../atoms/PrimaryButton";
import Title from "../atoms/Title";
import Input from "../atoms/Input";
import CheckBoxBlock from "../molecules/CheckBoxBlock";
import EmailIcon from "../../assets/icons/mail.svg";
import LockIcon from "../../assets/icons/lock.svg";

function RegistrationContent({ inputData, inputHandler }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [agreedToToS, setAgreedToToS] = useState(false);
  const { email, password, confirmPassword } = inputData;
  const pwdMatched = password === confirmPassword;

  const registrationHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(setRegisteredAccount(inputData));

    setTimeout(() => {
      dispatch(toggle(true));
      dispatch(setType("success"));
      dispatch(setText("Registration successful!"));
    }, 1000);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const updateChecked = (checked) => {
    setAgreedToToS(checked);
  };

  return (
    <div className="container">
      <Title text="Register" />
      <form
        onSubmit={(e) => registrationHandler(e)}
        type="submit"
        style={{ margin: "10px 0px", width: "100%", maxWidth: 360 }}
      >
        <Input
          name="email"
          placeholder="E-Mail Address"
          type="email"
          icon={EmailIcon}
          value={email}
          onChange={inputHandler}
          required
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          icon={LockIcon}
          value={password}
          onChange={inputHandler}
          required
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          icon={LockIcon}
          value={confirmPassword}
          onChange={inputHandler}
          required
        />
        <CheckBoxBlock text="You agree to the Terms of Service." updateChecked={updateChecked} />
        {!pwdMatched && <p style={{ color: "red", marginBottom: 24, textAlign: "center" }}>Passwords do not match!</p>}
        <PrimaryButton
          type="submit"
          text={loading ? "Loading..." : "Sign up"}
          disabled={password.length === 0 || !pwdMatched || !agreedToToS}
        />
      </form>

      <p style={{ margin: "20px 0px 0px" }}>
        Already have an account? <Link to="/login">Log In</Link>
      </p>

      <p style={{ margin: "20px 0px 0px" }}>
        Have questions? <Link to="/faq">See our FAQ</Link>
      </p>
    </div>
  );
}

export default RegistrationContent;
