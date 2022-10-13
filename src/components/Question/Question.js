import React from "react";

const Question = ({ qun }) => {
  const { id, correctAnswer, options, question } = qun;

  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
