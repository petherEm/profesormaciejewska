import TimelineFunctions from "@/components/TimelineFunctions";
import React from "react";

const Funkcje = () => {
  return (
    <section id="aboutme" className="services mb-20 ">
      <div className="shadow-xl max-w-[1466px] md:mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] md:px-6 xl:px-0 relative h-auto flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="services__top flex flex-col xl:mb-[60px]">
            <TimelineFunctions />
          </div>
        </div>
      </div>

      {/* GRID CONTAINER */}
    </section>
  );
};

export default Funkcje;
