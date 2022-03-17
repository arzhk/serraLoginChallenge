import React from "react";
import Question from "../atoms/Question";
import Answer from "../atoms/Answer";

function QuestionBlock({ qText, aText }) {
  return (
    <div style={{ marginBottom: 30, maxWidth: 650 }}>
      <Question text={qText} />
      <Answer text={aText} />
    </div>
  );
}

export default QuestionBlock;
