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
import bg from "@/app/assets/office.jpg";
import TextBlock from "./textDivider";

type Experience = {
  slices?: any;
};


export default function Experience({ slices }: Experience) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { amount : 0.5, once : true });
  const title = slices[1].primary.content[0].text;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.3"],
  });

  const y  = useTransform(
    scrollYProgress,
    [0,1],
    [50, 0]
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
      <div className="w-full relative py-40 overflow-hidden" ref={container}>
        <motion.div className="absolute inset-x-0 inset-y-0 z-[0] opacity-[0.7]" style={{ y }}>
        <Image
            className="grayscale"
            src={bg.src}
            fill={true}
            alt="eperience background"
            style={{objectFit: "cover"}}
        />
        </motion.div>
        <div className="container relative z-[2]">
            <TextBlock content={title} container={container} bold={true} />
        </div>
      </div>
      <div className="w-full relative mt-40">
        <div className="container">
        <h2 className="text-rose-50 text-1xl uppercase font-normal">
          My work history
        </h2>
        </div>
      </div>
    </section>
  );
}
