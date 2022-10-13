import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div>
      <HeroSection></HeroSection>
      {/* {topics.data.map((topic) => (
        <h1> {topic.name}</h1>
      ))} */}
    </div>
  );
};

export default Home;
