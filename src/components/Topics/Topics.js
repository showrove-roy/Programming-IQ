import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicItems from "../TopicItems/TopicItems";
import pic from "../../3.jpg";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div
      className=' h-fit'
      style={{
        background: `linear-gradient(45deg, #222831a7, #30475ead) , url(${pic}) no-repeat center center /cover`,
        backgroundAttachment: "fixed",
      }}>
      <h1 className='md:text-5xl text-3xl font-bold pt-10 text-white'>
        Choose Your Topic
      </h1>
      <div className='h-fit w-full grid lg:grid-cols-4 md:grid-cols-2  gap-4 md:pt-30 pt-10 md:pb-20 pb-10 px-10 mx-auto'>
        {topics.data.map((topic) => (
          <TopicItems key={topic.id} topic={topic}></TopicItems>
        ))}
      </div>
    </div>
  );
};

export default Topics;
