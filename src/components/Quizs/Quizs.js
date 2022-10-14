import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Question from "../Question/Question";
import "react-toastify/dist/ReactToastify.css";

const Quizs = () => {
  const quizsData = useLoaderData();

  const { name, questions, total } = quizsData.data;
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const result = (answer) => {
    answer === true ? setCorrect(correct + 1) : setWrong(wrong + 1);
    answer === true ? notify() : warning();
  };
  const notify = () =>
    toast.success("👍 Wow! Good Job", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warning = () =>
    toast.warn("⚠️ Sorry! Please Try Next Time", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className='px-5'>
      <h1 className='font-bold md:text-5xl text-3xl md:mt-10 mt-5 mb-2 text-[#F05454]'>
        Quiz of {name}
      </h1>
      <hr className='h-1 md:w-40 w-28 m-auto mb-1 bg-[#30475E]' />
      <hr className='h-1 md:w-32 w-20 m-auto md:mb-5 mb-2 bg-[#30475E]' />
      <div className='sticky top-12 border-b-2 bg-white py-5 md:mb-10 mb-5 flex justify-evenly'>
        {" "}
        <p className='md:text-2xl text-base font-medium text-[#256D85]'>
          Total Quiz: {total}
        </p>
        <p className='md:text-2xl text-base font-medium text-[#F05454]'>
          Wrong: {wrong}
        </p>
        <p className='md:text-2xl text-base font-medium text-[#256D85]'>
          Correct: {correct}
        </p>
      </div>
      <div>
        {questions.map((qun, index) => (
          <Question
            key={qun.id}
            index={index}
            qun={qun}
            result={result}></Question>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Quizs;
