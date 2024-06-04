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

type About = {
  slices?: any;
};

type Word = {
  value?: any;
  range?: any;
  progress?: any;
};

export default function About({ slices }: About) {
  const container = useRef(null);
  const avatar_about = useRef(null);
  const av_isInView = useInView(avatar_about, { once: true });
  const title = splitStringReg(slices[2].primary.title);
  const content = splitStringReg(slices[2].primary.content[0].text);
  let progressNum = 0;
  let progressEnd = ( title.length + content.length );

  const { scrollYProgress }: any = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.10"],
  });

  const g_duration = {
    duration: 0.5,
    easings: "easeInOut",
  };

  const scale: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: g_duration,
    },
  };

  const skills = slices[2].primary.skills;
  return (
    <section
      className="aboutSection flex flex-wrap mt-40 justify-center"
    >
      <motion.div ref={container} className="container flex flex-start flex-wrap mt-[200px] justify-between">
        <div className=" w-full md:w-4/12 relative">
          <div className="sticky top-[10%]">
            <motion.div
              ref={avatar_about}
              className="overflow-hidden rounded-full relative w-[250px] aspect-square grayscale mb-10"
              variants={scale}
              initial={`initial`}
              animate={av_isInView ? "animate" : "initial"}
            >
              <Image
                src={slices[2].primary.image.url}
                alt="Image of me"
                fill={true}
                placeholder="blur"
                blurDataURL={me.src}
                sizes="100%"
              />
            </motion.div>
            <h2 className="text-7xl font-black text-white leading-snug">
              About Me
            </h2>
          </div>
        </div>
        <motion.div className="w-full md:w-7/12">
          <p className="text-5xl font-bold text-white leading-relaxed mb-10">
            {title.map((word: string, i: number) => {
              const start = progressNum / progressEnd;
              const end = start + ( 1 / progressEnd );
              progressNum++;
              return (
                <Word
                  key={i}
                  value={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
          <p className="text-2xl font-normal text-white leading-loose mb-20">
            {content.map((word: string, j: number) => {
              const start = progressNum / progressEnd;
              const end = start + ( 1 / progressEnd );
              progressNum++;
              return (
                <Word
                  key={j}
                  value={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
          <p className="text-5xl font-bold text-white leading-relaxed mb-10">
            What I can do
          </p>
          <Accordion type="single" collapsible>
            {skills.map((skill: any, index: number) => {
              return (
                <AccordionItem key={`skill${index}`} value={skill.skill}>
                  <AccordionTrigger className="text-white text-2xl">
                    {skill.skill}
                  </AccordionTrigger>
                  <AccordionContent className="rounded-2xl bg-indigo-500 p-5">
                    <p className="text-lg font-normal text-white leading-loose">
                      {skill.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}

const Word = ({ value, range, progress }: Word) => {
  const opacity = useTransform(progress, range, [0.05, 1]);
  return <motion.span style={{ opacity }}>{value}</motion.span>;
};
