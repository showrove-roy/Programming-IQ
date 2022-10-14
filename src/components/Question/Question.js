import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ qun, index, result }) => {
  const { id, correctAnswer, options, question } = qun;
  const checkAnswer = (answer) => {
    answer === correctAnswer ? result(true) : result(false);
    if (answer) {
      let btns = document.getElementsByClassName(`${id}`);
      for (let btn of btns) {
        btn.disabled = true;
      }
    }
  };
  const seeAnswer = () =>
    toast.info(`Answer of quiz ${index + 1} : ${correctAnswer}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className=' rounded-md md:w-3/5 w-full mx-auto p-4 my-8 bg-[#DFF6FF]'>
      <div className='flex justify-end'>
        <EyeIcon
          title='See Correct Answer'
          className='h-5 w-5 cursor-pointer text-[#47B5FF] hover:text-[#F05454]'
          onClick={seeAnswer}></EyeIcon>
      </div>
      <h1 className='md:text-xl text-lg font-medium mb-4'>
        <strong className='text-[#47B5FF]'>Quiz {index + 1}:</strong> {question}
      </h1>
      <div>
        {options.map((option, indu) => (
          <div
            className='text-left pl-4 md:font-medium py-2 text-gray-600'
            key={`${id}_${indu}`}>
            <input
              className={`mr-2 cursor-pointer ${id}`}
              type='radio'
              id={`${id}_${indu}`}
              name={id}
              value={option}
              onClick={() => checkAnswer(option)}
            />
            <label htmlFor={`${id}_${indu}`} className='cursor-pointer'>
              {option}
            </label>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Question;
