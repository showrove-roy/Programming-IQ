import React from "react";
import pic from "../../3.jpg";

const HeroSection = () => {
  return (
    <div
      className='w-full h-screen flex justify-center'
      style={{
        background: `linear-gradient(45deg, #222831a7, #30475ead) , url(${pic}) no-repeat center center /cover`,
        backgroundAttachment: "fixed",
      }}>
      <div className='md:px-36 sm:px-10 px-5 md:mt-40 mt-10'>
        <h1 className='md:text-4xl text-3xl font-bold text-white md:mb-10 mb-4'>
          Test Your Own IQ!
        </h1>

        <p className='text-slate-300 md:text-lg text-base font-medium text-justify'>
          Test your knowledge, proved you as a programmer. Learning and practise
          make a men perfect but exam proved that. If you want build confidence
          in programming that you need pass this Quiz, if you fail first time
          don't afraid, you should gathering motivation and try again..... Good
          Luck
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
