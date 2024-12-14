import React, { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-md mx-auto my-4 p-4 border rounded shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">What is React?</p>
        <button
          onClick={toggleAnswer}
          className="text-2xl font-bold text-blue-500 focus:outline-none"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          React is a JavaScript library for building user interfaces. It is
          maintained by Facebook and a community of individual developers and
          companies.
        </div>
      )}
    </div>
  );
};

export default FAQ;
