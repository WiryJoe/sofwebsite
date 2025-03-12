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
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      question: "Question 3",
      answer: "Answer 2",
    },
  ];

  return (
    <div className="w-[60vw] mx-auto p-6">
      <h2 className="text-4xl font-bold mx-16 underline decoration-red-600 mb-8">
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
            <div className="relative">
              <p className="text-left">{faq.answer}</p>

              <div className="absolute -bottom-4 -left-12 flex items-center w-12 text-center p-4 rounded-full">
                <svg
                  className="h-5 w-5 rotate-90 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="6 6 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
