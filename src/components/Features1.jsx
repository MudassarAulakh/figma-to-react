import React from "react";

const Features = () => {
  return (
    <div className=" lg:my-[80px] my-8">
      <div className="flex flex-col text-center py-2 md:py-3 lg:py-[50px] my-[30px] gap-3 px-5 md:px-[75px]">
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl">
          Instantly create stylish logos with our AI design algorithms
        </p>
        <p className="text-sm md:text-xl lg:text-2xl">
          Transform your brand instantly with our AI-powered logo generator.
          Crafted in seconds, our logos exude timeless style and enduring
          appeal.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-around items-center">
          <div className="flex lg:ml-[100px] gap-2 flex-col text-center w-[50px] items-center">
          <img 
          src="./11.jpg"
           alt=""
          className="text-[10px]"
          />
          <div>SMART</div>
          </div>
          <div className="flex gap-2 flex-col text-center w-[50px] items-center">
          <img 
          src="./13.jpg"
           alt=""
          className="text-[10px]"
          />
          <div>PROFESSIONAL</div>
          </div>
          <div className="flex gap-2 lg:mr-[100px] flex-col text-center w-[50px] items-center">
          <img 
          src="./16.png"
           alt=""
          className="text-[10px]"
          />
          <div>AUTOMATED</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <img
            src="./9.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./5.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./3.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./8.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./6.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./15.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./10.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./7.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
          <img
            src="./4.jpg"
            alt=""
            className="w-full sm:w-[48%] md:w-[31%] lg:w-[29%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
