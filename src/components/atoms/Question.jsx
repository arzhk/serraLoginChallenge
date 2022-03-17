import React from "react";

function Question({ setShowAnswer, showAnswer, text }) {
  return (
    <div className="question" onClick={() => setShowAnswer(!showAnswer)}>
      {text}
    </div>
  );
}

export default Question;
