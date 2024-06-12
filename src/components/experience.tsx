"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  Variants,
  useTransform,
  useInView,
  useScroll,
} from "framer-motion";
import bg from "@/app/assets/spaceman.jpg";
import TextBlock from "./textDivider";

type Experience = {
  slices?: any;
};

type ExperienceBox = {
  children?: any;
  variant?: any;
};

export default function Experience({ slices }: Experience) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { amount : 0.5, once : true });
  const title = slices[1].primary.content[0].text;
  const exper = slices[3].primary.services;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y  = useTransform(
    scrollYProgress,
    [0,1],
    [75, -75]
  )

  const showVariant : Variants = {
    initial : {
      y: 50,
      opacity: 0
    },
    animated : {
      y : 0,
      opacity : 1,
      transition : {
        duration : 0.5,
        easings : [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="experienceSection flex flex-wrap mt-60 justify-center">
      <div className="w-full relative py-40 overflow-hidden bg-black" ref={container}>
        <motion.div className="absolute inset-x-0 inset-y-[-50px] z-[0]" style={{ y }}>
        <Image
            className="grayscale"
            src={bg.src}
            fill={true}
            alt="eperience background"
            style={{objectFit: "contain" }}
        />
        </motion.div>
        <div className="container relative z-[2]">
            <TextBlock content={title} container={container} bold={true} />
        </div>
      </div>
      <div className="w-full relative">
        <div className="container pt-60 pb-10">
        <h2 className="text-yellow-500 text-1xl uppercase font-bold">
          My work history
        </h2>
        </div>
        <div className="experienceWrap w-full">
        {exper.map((company: any, index: number) => {
          return (
            <ExperienceBox key={index} variant={showVariant}>
              <div className="container mx-auto flex justify-between items-center relative z-[2]">
                <div className="w-full md:w-3/12">
                <h3 className="text-6xl text-yellow-500 font-bold uppercase2">
                  {company.button_text}
                </h3>
                </div>
                <div className="w-full md:w-9/12">
                <h3 className="text-6xl text-yellow-500 font-bold uppercase2">
                  {company.content}
                </h3>
                <p className="text-sm leading-relaxed text-amber-50 font-bold uppercase">
                  {company.service}
                </p>
                </div>
              </div>
            </ExperienceBox>
          );
        })}
      </div>
      </div>
    </section>
  );
}

const ExperienceBox = ({ children, variant } : ExperienceBox) => {
  const skillRef = useRef(null);
  const inView = useInView(skillRef, { amount : 0.5, once : true })
  
  return(
    <motion.div ref={skillRef} initial="initial" variants={variant} animate={inView ? "animated" : "initial"} className="experienceBox py-8 border-gray-50/10 border-solid border-t-[1px] relative">
      {children}
    </motion.div>
  )
}