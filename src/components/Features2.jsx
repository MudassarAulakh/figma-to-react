import React from "react";
import { PiChatsCircleBold } from "react-icons/pi";
import { FiZap } from "react-icons/fi";
import { FaRegShareSquare } from "react-icons/fa";
import { TfiCommentsSmiley } from "react-icons/tfi";

const Feature = () => {
  return (
    <div className="bg-[#F9FAFB] px-[20px] lg:px-[200px] lg:py-[100px] py-6">
      <div className="flex items-center justify-center lg:mt-[80px]">
      <button className="bg-[#DDEEF9] text-[#004FAA] px-3 py-2 w-[120px] rounded-2xl">Features</button>
      </div>
      <div className="flex flex-col text-center pb-2 md:py-3 lg:py-[50px] my-[30px] gap-3 px-5 md:px-[75px]">
        <p className="font-semibold text-xl md:text-2xl lg:text-4xl">Powerful Features Redefining Design Excellence</p>
        <p className="text-sm md:text-xl lg:text-2xl">
          Discover innovation with our website's cutting-edge features,
          redefining design excellence for a seamless and efficient user
          experience like never before.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:p-5">
  <div className="flex flex-col items-start gap-4 bg-white p-3 lg:h-[300px] lg:w-[310px] rounded-xl">
    <PiChatsCircleBold className="w-11 h-11 p-3 text-white rounded bg-[#0068D6] md:mb-3 lg:mb-[50px]" />
    <h1 className="text-lg sm:text-xl font-semibold">No expertise in design required.</h1>
    <p className="text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur. Dui condimentum faucibus
      condimentum ac. Commodo felis hendrerit porttitor nisi mattis
      pharetra.
    </p>
  </div>

  <div className="flex flex-col items-start gap-4 bg-white p-3 lg:h-[300px] lg:w-[310px] rounded-xl">
    <FiZap className="w-11 h-11 p-3 text-white rounded bg-[#0068D6] md:mb-3 lg:mb-[50px]" />
    <h1 className="text-lg sm:text-xl font-semibold">Quick, simple, and enjoyable.</h1>
    <p className="text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur. Dui condimentum faucibus
      condimentum ac. Commodo felis hendrerit porttitor nisi mattis
      pharetra.
    </p>
  </div>

  <div className="flex flex-col items-start gap-4 bg-white p-3 lg:h-[300px] lg:w-[310px] rounded-xl">
    <FaRegShareSquare className="w-11 h-11 p-3 text-white rounded bg-[#0068D6] md:mb-3 lg:mb-[50px]" />
    <h1 className="text-lg sm:text-xl font-semibold">Logo files ready for immediate use.</h1>
    <p className="text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur. Dui condimentum faucibus
      condimentum ac. Commodo felis hendrerit porttitor nisi mattis
      pharetra.
    </p>
  </div>

  <div className="flex flex-col items-start gap-4 bg-white p-3 lg:h-[300px] lg:w-[310px] rounded-xl">
    <TfiCommentsSmiley className="w-11 h-11 p-3 text-white rounded bg-[#0068D6] md:mb-3 lg:mb-[50px]" />
    <h1 className="text-lg sm:text-xl font-semibold">Fully customizable to 100%.</h1>
    <p className="text-sm sm:text-base">
      Lorem ipsum dolor sit amet consectetur. Dui condimentum faucibus
      condimentum ac. Commodo felis hendrerit porttitor nisi mattis
      pharetra.
    </p>
  </div>
</div>

    </div>
  );
};

export default Feature;
