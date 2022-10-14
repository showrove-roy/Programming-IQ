import React from "react";

const Question = ({ qun, index }) => {
  const { id, correctAnswer, options, question } = qun;
  return (
    <div className=' rounded-md md:w-3/5 w-full mx-auto p-4 my-8 bg-[#DFF6FF]'>
      <h1 className='md:text-xl text-lg font-medium my-4'>
        <strong className='text-[#47B5FF]'>Quiz {index + 1}:</strong> {question}
      </h1>
      <div>
        {options.map((option, indu) => (
          <div
            className='text-left pl-4 md:font-medium py-2 text-gray-600'
            key={`${id}_${indu}`}>
            <input
              className='mr-2'
              type='radio'
              id={`${id}_${indu}`}
              name={id}
              value={option}
            />
            <label htmlFor={`${id}_${indu}`} className='cursor-pointer'>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
