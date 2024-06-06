"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import splitStringReg from "@/utils/splitString";

type TextBlock = {
  content?: any;
};

type Word = {
  value?: any;
  range?: any;
  progress?: any;
};

export default function TextBlock({
  content = "This is a text block",
}: TextBlock) {
  const container = useRef(null);
  const textArr = splitStringReg(content);

  const { scrollYProgress }: any = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.40"],
  });

  return (
    <div className="relative pt-[50vh] w-full flex justify-center items-center">
      <div ref={container} className="container">
        <h3 className="text-6xl text-white font-bold leading-relaxed">
          {textArr.map((word: string, index: number) => {
            const start = index / textArr.length;
            const end = start + 1 / textArr.length;
            return (
              <Word
                key={index}
                value={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </h3>
      </div>
    </div>
  );
}

const Word = ({ value, range, progress }: Word) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span style={{ opacity }}>
      {value}
    </motion.span>
  );
};
