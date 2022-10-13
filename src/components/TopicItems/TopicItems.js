import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const TopicItems = ({ topic }) => {
  const { id, name, total, logo } = topic;
  return (
    <div className='m-auto border-[1px] bg-[#30475E] p-2 rounded-md'>
      <img className='w-64 bg-[#256D85] rounded-md' src={logo} alt='' />
      <h3 className='md:text-2xl text-xl py-2 font-medium text-white'>
        {name}
      </h3>
      <div className='flex justify-between place-items-center	 text-white font-semibold mt-4'>
        <p>Quiz: {total}</p>
        <Link to={`/topic/${id}`}>
          <button className='flex align-bottom rounded px-4 py-1 bg-[#F05454] hover:bg-red-700'>
            Test Now <ArrowRightIcon className='h-7 w-5 ml-1'></ArrowRightIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopicItems;
