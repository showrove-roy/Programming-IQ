import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizs = () => {
  const quizsData = useLoaderData();

  const { id, logo, name, questions, total } = quizsData.data;

  return (
    <div>
      <h1>Quiz of {name}</h1>
      {questions.map((qun) => (
        <Question key={qun.id} qun={qun}></Question>
      ))}
    </div>
  );
};

export default Quizs;
