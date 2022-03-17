import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/atoms/Title";
import PrimaryButton from "../components/atoms/PrimaryButton";
import QuestionBlock from "../components/molecules/QuestionBlock";

const questions = [
  {
    question: "What is Synergy of Serra?",
    answer:
      "Synergy of Serra is a digital deck-building Trading Card Game that uses blockchain technology and non-fungible tokens (NFTs).",
  },
  {
    question: "What stage of the development is the game at?",
    answer: "The game is currently in development getting ready to release an Alpha phase.",
  },
  { question: "Should you hire Aaron?", answer: "Of course!" },
];

function Faq() {
  return (
    <div className="container">
      <Title text="FAQ" />
      <div style={{ margin: "0px 0px 40px 0px" }}>
        {questions.map((el, i) => (
          <QuestionBlock qText={el.question} aText={el.answer} />
        ))}
      </div>
      <Link to="/login">
        <PrimaryButton text="Back to login" />
      </Link>
    </div>
  );
}

export default Faq;
