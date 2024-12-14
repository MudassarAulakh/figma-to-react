import React from "react";
import { MdStar } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Testimonials = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center text-center gap-2 rounded-3xl bg-[#F9FAFB] lg:mx-[150px] my-[40px] lg:my-[100px]">
      <div className="flex items-center justify-center lg:mt-[80px]">
        <button className="bg-[#DDEEF9] text-[#004FAA] px-3 py-2 w-[120px] rounded-2xl">
          Testimonials
        </button>
      </div>
      <h1 className="flex text-center md:px-[100px] my-[30px] font-semibold text-xl md:text-2xl lg:text-4xl">
        Craft AI has saved us thousands of hours of work. We’re able to spin up
        projects and features faster.
      </h1>
      <img 
      src="./Avatar.png" 
      alt=""
      className="text-xl font-semibold bg-cover" 
      />
      <h2 className="text-xl font-semibold">Mollie Hall</h2>
      <div className="flex justify-center items-center text-yellow-400">
      <MdStar className="w-[30px] h-auto" />
      <MdStar className="w-[30px] h-auto" />
      <MdStar className="w-[30px] h-auto" />
      <MdStar className="w-[30px] h-auto" />
      <MdStar className="w-[30px] h-auto" />
      </div>
      <p>
        Hear from some of our amazing customers who are automating their
        finances.
      </p>
      <div className="flex items-center justify-center mb-[50px]">
      <GoDotFill className="text-[#E2EBF3]"/>
      <GoDotFill className="text-[#0068D6]"/>
      <GoDotFill className="text-[#E2EBF3]"/>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
