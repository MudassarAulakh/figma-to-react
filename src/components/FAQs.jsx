import React, { useState } from "react";

const FAQs = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const questions = [
    {
      question: "How do I create an account on your platform?",
      answer:
        "To create an account on our platform, simply click on the 'Sign Up' button on the homepage. Fill in the required information, verify your email, and you're all set to explore and use our services.",
    },
    {
      question: "What file formats are available for logo downloads?",
      answer:
        "Logos can be downloaded in multiple formats, including PNG, JPEG, SVG, PDF, and EPS, ensuring compatibility for web, print, and professional design needs.",
    },
    {
      question: "Can I customize a pre-designed logo template?",
      answer:
        "Yes, pre-designed logo templates can be fully customized to match your brand’s unique style, colors, and text.",
    },
    {
      question: "Is there a refund policy for logo purchases?",
      answer:
        "Refund policies for logo purchases depend on the seller. Some offer revisions or refunds if not satisfied, while others may not allow refunds once the design is delivered.",
    },
    {
      question: "How do I contact customer support for assistance?",
      answer:
        "To contact customer support, visit the website, find the 'Contact Us' section, and use live chat, email, or phone options for assistance.",
    },
    {
      question: "Are there any subscription plans available for extended features?",
      answer:
        "Yes, many services offer subscription plans for extended features. Check the website for details on pricing and the features included in each plan.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      // If the index is already open, remove it from the array
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Otherwise, add the index to the array
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex items-center justify-center lg:mt-[80px]">
        <button className="bg-[#DDEEF9] text-[#004FAA] px-3 py-2 w-[120px] rounded-2xl">
          FAQs
        </button>
      </div>
      <h1 className="flex text-center md:px-[100px] my-[10px] font-semibold text-xl md:text-2xl lg:text-4xl">
        Queries Answered for a Seamless Experience
      </h1>
      <p className="text-sm md:text-[18px] lg:text-xl">
        Explore our FAQ section for comprehensive answers to common queries.
      </p>
      <div className="w-full text-left lg:max-w-[800px] md:max-w-[600px] max-w-[350px] mt-6 space-y-4">
        {/* Dynamic Questions & Answers */}
        {questions.map((item, index) => (
          <div key={index} className="bg-[#F9FAFB]  rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="mr-4 focus:outline-none"
                >
                  <img
                    src={openIndexes.includes(index) ? "/2.jpg" : "/12.jpg"}
                    alt={openIndexes.includes(index) ? "Minus" : "Plus"}
                    className="bg-cover "
                  />
                </button>
                <p className="text-lg font-semibold">{item.question}</p>
              </div>
            </div>
            {openIndexes.includes(index) && (
              <div className="mt-2 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
