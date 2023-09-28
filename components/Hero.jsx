"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Hero = () => {
  return (
    <section className="hero bg-orange-100 py-12 xl:pt-12 xl:pb-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full">
          <div className="hero__text xl:w-[48%] text-center xl:text-left">
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] mx-auto xl:mx-0 rounded-lg"
            >
              <Image src="/img/logo-pw.png" width={30} height={30} alt="" />
              <p className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.5]">
                Politechnika Warszawska
              </p>
            </motion.div>

            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mb-6"
            >
              Prof. dr hab. Alina Maciejewska
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-[42px] md:max-w-xl"
            >
              Ekspertka w odtwarzaniu materii organicznej w gruntach
              zdegradowanych i technologii wytwarzania produktów opartych na
              węglu brunatnym do biologicznej rekultywacji terenów.
            </motion.p>

            <motion.button
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="btn btn-lg btn-accent mx-auto xl:mx-0 text-white"
            >
              Współpraca
            </motion.button>
          </div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hero__img hidden xl:flex max-w-[814px] self-end"
          >
            <Image src="/img/Anobgr.png" width={500} height={500} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
