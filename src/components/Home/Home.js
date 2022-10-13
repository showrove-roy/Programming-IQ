import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import TopicItems from "../TopicItems/TopicItems";
import pic from "../../3.jpg";

const Home = () => {
  const topics = useLoaderData();

  return (
    <div>
      <HeroSection></HeroSection>

      {/* <div className='h-1 w-full bg-orange-700 ' /> */}

      <div
        className='h-fit w-full grid lg:grid-cols-4 md:grid-cols-2  gap-4 md:pt-30 pt-10 md:pb-20 pb-10 px-10 mx-auto'
        style={{
          background: `linear-gradient(45deg, #222831a7, #30475ead) , url(${pic}) no-repeat center center /cover`,
          backgroundAttachment: "fixed",
        }}>
        {topics.data.map((topic) => (
          <TopicItems key={topic.id} topic={topic}></TopicItems>
        ))}
      </div>
    </div>
  );
};

export default Home;
