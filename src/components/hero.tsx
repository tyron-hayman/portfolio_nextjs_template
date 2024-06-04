"use client";
import Image from "next/image";
import Head from "next/head";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import splitStringReg from "@/utils/splitString";
import { animate, motion, Variants, useTransform } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

type Hero = {
  data?: any;
  progress?: any;
};

export default function Hero({ data }: Hero) {
  const heading = splitStringReg(data.slices[0].primary.hero_text);

  const textVariant: Variants = {
    initial: {
      opacity: 0,
    },
    animate: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: custom,
        ease: "circOut",
      },
    }),
  };

  const variants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: custom * 0.1,
        ease: "circOut",
      },
    }),
  };

  return (
    <section className="heroSection min-h-screen flex flex-wrap items-center justify-center">
      <motion.div
        className="container"
      >
        <>
          <motion.h2
            className="text-gray-500 font-normal uupercase text-2xl"
            initial="initial"
            animate="animate"
            variants={textVariant}
            custom={1}
          >
            {data.slices[0].primary.hero_subtext[0].text}
          </motion.h2>
          <h1 className="text-white font-black uppercase block my-3">
            {heading.map((char: string, index: number) => {
              if (char != "<br>") {
                return (
                  <motion.span
                    className="inline-block"
                    key={`heroHead${index}`}
                    initial="initial"
                    animate="animate"
                    variants={variants}
                    custom={index}
                  >
                    {char}
                  </motion.span>
                );
              } else {
                return <br key={`heroHead${index}`} />;
              }
            })}
          </h1>
          <motion.h3
            className="text-gray-500 font-normal uupercase text-2xl block"
            initial="initial"
            animate="animate"
            variants={textVariant}
            custom={1.5}
          >
            {data.hero_text}
          </motion.h3>
        </>
      </motion.div>
    </section>
  );
}
