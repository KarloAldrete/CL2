import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-[#0A0A0B] dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does your agency offer?",
    answer: "We offer a variety of software development services, including web, mobile, and custom application development.",
  },
  {
    question: "Do you have experience in my industry?",
    answer: "We have experience in a wide range of industries. Please contact us to discuss your specific needs.",
  },
  {
    question: "How is communication handled during a project?",
    answer:
      "We believe in open and regular communication with our clients. We use a variety of communication tools to keep our clients informed about the progress of the project.",
  },
  {
    question: "Do you offer technical support after project completion?",
    answer:
      "Yes, we offer technical support after project completion. Please contact us to discuss the details of our technical support.",
  },
];

export default Faq;