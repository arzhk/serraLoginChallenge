import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../components/atoms/Title";
import PrimaryButton from "../components/atoms/PrimaryButton";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <Title text={`User is ${user.loggedIn ? "" : "not"} logged in.`} />
      {!user.loggedIn ? (
        <Link to="/login">
          <PrimaryButton text="Go to login" />
        </Link>
      ) : (
        <p>Yay</p>
      )}
    </div>
  );
}

export default Home;
