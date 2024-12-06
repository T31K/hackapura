"use client";
import { useState, useRef } from "react";
import { faq } from "@/data";
import { IconChevronDown } from "@tabler/icons-react";

const FaqItem = ({ index, question, answer, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);
  const isOpen = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <li className="bg-stone-800 my-2 border rounded-xl">
      <p
        onClick={handleClick}
        className="flex flex-row text-white justify-between items-center font-semibold p-3 !m-0 cursor-pointer"
      >
        <span>{question}</span>
        <IconChevronDown
          className={`h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </p>
      <div
        ref={ref}
        style={{
          maxHeight: isOpen ? `${ref.current.scrollHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
        className=" overflow-hidden duration-500 transition-all"
      >
        <div className="p-3 text-stone-400">
          {answer.map((text, idx) => (
            <>
              <p key={idx}>{text}</p>
              <br />
            </>
          ))}
        </div>
      </div>
    </li>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex justify-center items-start mb-2 mt-6 ">
      <div className="w-full sm:w-10/12 md:w-[80%] my-1 ">
        <ul className="flex flex-col">
          {faq.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
