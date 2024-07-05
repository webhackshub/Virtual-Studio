import React, { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

const FAQs = () => {
  const FAQsData = [
    {
      question: 'Can I boost my growth?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, asperiores? Ullam autem quod pariatur sapiente fugit dolores aspernatur suscipit earum quaerat quia voluptates dolore illum perspiciatis, quisquam est perferendis harum!',
    },
    {
      question: 'What is the designing process?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat corrupti similique dolor quae doloremque officia numquam aliquam, et quod dolorum! Eligendi magnam dolores similique aut fugiat blanditiis voluptatibus atque cum!',
    },
    {
      question: 'How long does the process take?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, asperiores? Ullam autem quod pariatur sapiente fugit dolores aspernatur suscipit earum quaerat quia voluptates dolore illum perspiciatis, quisquam est perferendis harum!',
    },
    {
      question: 'What are the costs involved?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, asperiores? Ullam autem quod pariatur sapiente fugit dolores aspernatur suscipit earum quaerat quia voluptates dolore illum perspiciatis, quisquam est perferendis harum!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="w-full xl:min-h-screen p-6 xl:p-12 text-[#1f1f1f]" id="FAQs">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl xl:text-5xl font-extrabold xl:font-black text-center leading-none font-[ME]">FAQs</h2>
        </div>

        <div className="w-full p-10 px-0 xl:p-12 xl:pb-0 flex gap-5 flex-col items-center justify-center">
          {FAQsData.map((faq, index) => (
            <div
              key={index}
              onClick={() => handleToggleFAQ(index)}
              className="w-full xl:w-[80%] xl:min-h-[10vh] p-5 rounded-xl xl:rounded-2xl bg-[#f4f4f4] cursor-pointer"
            >
              <div className="transition-transform duration-500">
                <div className="w-full h-[6vh] xl:h-[8vh] flex items-center justify-between">
                  <h2 className="xl:text-2xl font-semibold xl:font-bold font-[ME]">{faq.question}</h2>
                  <span className="text-xl font-bold">
                    {activeIndex === index ? <RiSubtractFill /> : <RiAddFill />}
                  </span>
                </div>
                <p className={`text-sm xl:text-lg p-0 leading-6 opacity-80 transition-max-height duration-500 overflow-hidden ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
