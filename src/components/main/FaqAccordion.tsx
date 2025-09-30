'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // You can change this as needed

type FaqItem = {
  question: string;
  answer: string;
};

const FaqAccordion = ({ faqs }: { faqs: FaqItem[] }) => {
  const [currentFaq, setCurrentFaq] = useState<number | null>(null);

  const handleFaq = (index: number) => {
    setCurrentFaq(currentFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center w-full gap-6 p-5 sm:p-12 bg-white">
      <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
        ❓ Common Questions
      </h2>
      <div className="flex flex-col max-w-[1144px] gap-6 w-full font-medium text-black text-base tracking-wide">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => handleFaq(index)}
              className={`flex justify-between w-full rounded-lg duration-300 hover:text-white hover:bg-red-700/90 group p-3 ${
                currentFaq === index && 'bg-red-700/90 text-white'
              }`}
            >
              <span className="group-hover:text-white">{`${index + 1}. ${faq.question}`}</span>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            {currentFaq === index && (
              <div className="w-full h-fit mt-3 p-3 border-red-700 border rounded-lg text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
