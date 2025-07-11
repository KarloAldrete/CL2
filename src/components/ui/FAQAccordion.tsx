'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-4 px-4 sm:px-0">
          <button
            className={`flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none transition-colors duration-300 ${
              activeIndex === index ? 'text-coder-green' : 'text-white hover:text-coder-green'
            }`} // Clase modificada para cambiar color condicionalmente
            onClick={() => toggleItem(index)}
          >
            {item.question}
            <svg
              className={`w-5 h-5 transform transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180 text-coder-green' : 'rotate-0 text-white' // También cambiamos el color del SVG
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0' // Usamos max-h-screen para asegurar que el contenido quepa
            }`}
          >
            <p className="mt-2 text-coder-grayblue pr-8">{item.answer}</p> {/* Agregamos padding a la derecha */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;