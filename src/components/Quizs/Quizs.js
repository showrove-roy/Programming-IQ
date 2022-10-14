import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizs = () => {
  const quizsData = useLoaderData();

  const { id, name, questions, total } = quizsData.data;

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
          Wrong: {total}
        </p>
        <p className='md:text-2xl text-base font-medium text-[#256D85]'>
          Correct: {total}
        </p>
      </div>
      <div>
        {questions.map((qun, index) => (
          <Question key={qun.id} index={index} qun={qun}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quizs;
