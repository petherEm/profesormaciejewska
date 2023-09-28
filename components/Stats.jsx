"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
          <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-black xl:mb-2">
              <CountUp start={0} end={40} duration={5} />+
            </div>
            <div>Lat w nauce</div>
          </div>
          <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-black xl:mb-2">
              <CountUp start={0} end={29} duration={5} />+
            </div>
            <div>Wypromowanych doktorów</div>
          </div>
          <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-black xl:mb-2">
              <CountUp start={0} end={200} duration={5} />+
            </div>
            <div>Publikacji naukowych</div>
          </div>
          <div className="stats_item flex-1 xl:border-r flex flex-col items-center">
            <div className="text-4xl xl:text-[64px] font-semibold text-black xl:mb-2">
              <CountUp start={0} end={22} duration={5} />+
            </div>
            <div>Nagród i wyróżnień</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
