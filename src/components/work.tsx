"use client";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion, Variants, useInView } from "framer-motion";
import useScreenSize from "@/lib/windowSize";

type Work = {
  hero_text?: any;
  slices?: any;
  progress?: any;
};

type ProjectBox = {
  inView? : any;
  children?: any;
  width?: number;
  image?: any;
  services?: string;
};

export default function Work({ hero_text, slices, progress }: Work) {
  const container = useRef(null);
  const screenSize = useScreenSize();
  const containerSize = 700 * ( slices.length + 1 );

  const { scrollYProgress }: any = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-100%`]);

  return (
    <div ref={container} className={`relative`} style={{ height : `${containerSize}px`, position : `relative` }}>
      <div className={`container workContainerWrap`}>
        <motion.div
          className={`work_container flex justify-between items-center`}
          style={{
            x,
            width : containerSize + "px"
          }}
        >
          <div className={`projectBox rounded-3xl overflow-hidden relative w-[600px]`}>
            <h2 className="text-white text-5xl font-normal leading-relaxed">
              {slices[1].primary.content[0].text}
            </h2>
          </div>
          {slices ? (
            <>
              {slices[1].primary.work.map((project: any, index: number) => {
                let servArr = project.services.split(",");
                return (
                  <ProjectBox key={`pro${index}`} inView={container} {...project}>
                    {project.latest_tag ? (
                      <p
                      className="absolute shadow-xl top-10 right-10 z-40 bg-indigo-500 rounded-full px-5 py-2 text-white"
                      >Latest</p>
                    ) : null }
                    <div className="projectContent z-30 absolute inset-x-10 bottom-10">
                      <h3 className="text-white text-3xl font-bold">
                        {project.title}
                      </h3>
                      {project.services ? (
                        <ul className="flex flex-wrap gap-2 mt-5">
                          {servArr.map((serv: string, s_index: number) => {
                            return <li 
                              key={`serv${s_index}`}
                              className="border-[1px] border-gray-300 border-solid text-sm text-white backdrop-blur-sm rounded-full px-5 py-2 bg-[rgba(255,255,255,0.1)]"
                            >{serv}</li>;
                          })}
                        </ul>
                      ) : null}
                    </div>
                    <div className="absolute inset-x-0 inset-y-0 z-20 bg-gradient-to-tr from-[rgba(0,0,0,0.5)] from-10%" />
                  </ProjectBox>
                );
              })}
            </>
          ) : null}
          <div className={`projectBox rounded-3xl overflow-hidden relative w-[600px]`}>
            <h2 className="text-white text-5xl font-normal leading-relaxed">
              ....and many more through studios such as Marca Studio Inc. and The Bannermen Inc.
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ProjectBox = ({ inView, children, width, image, services }: ProjectBox) => {
  const isInView = useInView(inView, { once: true });

  const proAnimation : Variants = {
    initial : {
      x : 150,
      opacity : 0
    },
    animated : {
      x : 0,
      opacity : 1,
      transition : {
        duration : 0.5,
        easings : "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className={`projectBox rounded-3xl overflow-hidden relative w-[600px] h-[50vh]`}
      variants={proAnimation}
      initial={`initial`}
      animate={isInView ? "animated" : "initial"}
    >
      {children}
      {image ? (
        <div
          className="proImage absolute z-10 inset-x-0 inset-y-0 scale-125 -rotate-12"
          style={{
            background: `url(${image.url}) center center no-repeat`,
          }}
        />
      ) : null}
    </motion.div>
  );
};


const ProjectCard = () => {
  
}
