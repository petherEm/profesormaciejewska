"use client";

import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

const Questions = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <section className="faq">
      <div className="container mx-auto">
        <h2 className="h2 faq__title text-center mb-[50px]">
          We have got answers
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Item 1 */}
          <div
            className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
            onClick={toggleActive}
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                Why to believe in Insove medical healthcare?
              </h4>

              <div className="faq__btn text-accent transition-all ease-in-out duration-300">
                {active ? (
                  <FaMinus className="text-2xl" />
                ) : (
                  <FaPlus className="text-2xl" />
                )}
              </div>
            </div>

            {/* answer */}
            <div
              className={`${
                active ? "h-full" : "h-0"
              } faq__answer overflow-hidden transition-all ease-in-out duration-300`}
            >
              <p className="font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                beatae autem quisquam commodi explicabo incidunt similique
                dolorum eius repellat earum?
              </p>
            </div>
          </div>

                    {/* Item 1 */}
                    <div
            className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
            onClick={toggleActive}
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                Why to believe in Insove medical healthcare?
              </h4>

              <div className="faq__btn text-accent transition-all ease-in-out duration-300">
                {active ? (
                  <FaMinus className="text-2xl" />
                ) : (
                  <FaPlus className="text-2xl" />
                )}
              </div>
            </div>

            {/* answer */}
            <div
              className={`${
                active ? "h-full" : "h-0"
              } faq__answer overflow-hidden transition-all ease-in-out duration-300`}
            >
              <p className="font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                beatae autem quisquam commodi explicabo incidunt similique
                dolorum eius repellat earum?
              </p>
            </div>
          </div>

                    {/* Item 1 */}
                    <div
            className="faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none"
            onClick={toggleActive}
          >
            <div className="flex items-center justify-between mb-[10px]">
              <h4 className="h4">
                Why to believe in Insove medical healthcare?
              </h4>

              <div className="faq__btn text-accent transition-all ease-in-out duration-300">
                {active ? (
                  <FaMinus className="text-2xl" />
                ) : (
                  <FaPlus className="text-2xl" />
                )}
              </div>
            </div>

            {/* answer */}
            <div
              className={`${
                active ? "h-full" : "h-0"
              } faq__answer overflow-hidden transition-all ease-in-out duration-300`}
            >
              <p className="font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                beatae autem quisquam commodi explicabo incidunt similique
                dolorum eius repellat earum?
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Questions;
