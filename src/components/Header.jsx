import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between lg:w-[100%] items-center bg-[#F8F8F8] md:flex-row flex-col-reverse">
      <div className="flex flex-col items-start md:gap-6 lg:ml-[150px] lg:w-[600px] w-full md:w-1/2 p-3 gap-3">
        <p className="text-[#4F4D55] text-lg md:text-xl">Craft, Customize, Captivate!</p>
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-7xl">
          Unlock Your Logo's Potential with LogoCraftAI
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          Use our AI-powered logo maker to craft your logo, create matching
          stationery, and design a brand you'll adore effortlessly!
        </p>
        <button className="bg-[#0068D6]  hover:bg-blue-700 font-semibold rounded-lg px-3 py-2 lg:text-[18px] text-[15px] text-white">
          Create Your Logo Now
        </button>
      </div>
      <div className="w-full flex justify-center md:w-1/2 lg:w-auto">
        <img
          src="../public/Container.png"
          alt=""
          className="h-auto sm:max-[400px] lg:w-[790px] "
        />
      </div>
    </div>
  );
};

export default Header;