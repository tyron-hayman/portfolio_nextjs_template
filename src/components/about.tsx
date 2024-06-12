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
import me from "@/app/assets/me.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scale } from "lucide-react";
import splitStringReg from "@/utils/splitString";
import TextBlock from "./textDivider";

type About = {
  slices?: any;
};

type Word = {
  value?: any;
  range?: any;
  progress?: any;
};

type Skill = {
  children?: any;
  variant?: any;
};

export default function About({ slices }: About) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { amount : 0.5, once : true });
  const title = slices[2].primary.title[0].text.split(" ");
  const skills = slices[2].primary.skills;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.3"],
  });

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
    <section className="aboutSection flex flex-wrap mt-40 justify-center">
      <div className="container-lg" ref={container}>
        <motion.h2 ref={titleRef} className="text-yellow-500 text-1xl font-bold uppercase" initial="initial" variants={showVariant} animate={inView ? "animated" : "initial"}>About Me</motion.h2>
        <TextBlock content={slices[2].primary.title[0].text} container={container} bold={true} />
      </div>
      <div className="container-lg pt-60 pb-10">
        <h2 className="text-yellow-500 text-1xl uppercase font-bold">
          I know some things
        </h2>
      </div>
      <div className="skillsWrap w-full">
        {skills.map((skill: any, index: number) => {
          return (
            <Skill key={index} variant={showVariant}>
              <div className="bg-yellow-500 absolute transition-all w-full z-[1] block skillsHighlight duration-500"/>
              <div className="container-lg mx-auto flex justify-between items-center relative z-[2]">
                <h3 className="text-5xl text-white font-bold uppercase w-full md:w-6/12">
                  {skill.skill}
                </h3>
                <p className="text-sm leading-relaxed text-amber-50 font-bold uppercase w-full md:w-5/12 transition-all duration-500">
                  {skill.description}
                </p>
              </div>
            </Skill>
          );
        })}
      </div>
    </section>
  );
}

const Word = ({ value, range, progress }: Word) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return <motion.span className="inline-block me-[1rem]" style={{ opacity }} dangerouslySetInnerHTML={{ __html : value }}></motion.span>;
};

const Skill = ({ children, variant } : Skill) => {
  const skillRef = useRef(null);
  const inView = useInView(skillRef, { amount : 0.5, once : true })
  
  return(
    <motion.div ref={skillRef} initial="initial" variants={variant} animate={inView ? "animated" : "initial"} className="skill py-5 border-gray-50/10 border-solid border-t-[1px] relative">
      {children}
    </motion.div>
  )
}
