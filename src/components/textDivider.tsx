"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import splitStringReg from "@/utils/splitString";

type TextBlock = {
  content?: any;
  container? : any;
  bold?: boolean;
};

type Word = {
  value?: any;
  range?: any;
  progress?: any;
};

export default function TextBlock({
  content = "This is a text block",
  container,
  bold = false
}: TextBlock) {
  const textArr = content.split(" ");

  const { scrollYProgress }: any = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.30"],
  });

  return (
      <div ref={container} className="textBlock">
        <p className={`text-7xl text-white ${bold ? "font-bold" : "font-nomral"} leading-snug`}>
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
        </p>
      </div>
  );
}

const Word = ({ value, range, progress }: Word) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span className="inline-block me-4" style={{ opacity }} dangerouslySetInnerHTML={{ __html : value }}>
    </motion.span>
  );
};
