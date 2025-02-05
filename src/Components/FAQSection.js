import { useState } from "react";

const FAQSection = () => {
  // State to track the visibility of answers
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How cool is Show of force?",
      answer: "Very.",
    },
    {
      question: "What does show of force do?",
      answer: "We fuck. Hard.",
    },
    {
      question: "How can I join?",
      answer: "Join our discord.",
    },
  ];

  return (
    <div className="w-[60vw] mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b-4 border-red-600 pt-8">
          <button
            onClick={() => toggleAnswer(index)}
            className="text-left w-full text-xl font-medium focus:outline-none flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 transform ${activeIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
          <div
            className={`mt-4 text-white ${activeIndex === index ? "block" : "hidden"}`}
          >
            <p className="text-left">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
