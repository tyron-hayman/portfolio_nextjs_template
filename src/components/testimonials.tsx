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
import TextBlock from "./textDivider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonials = {
  slices?: any;
};

type Testimonial = {
  children?: any;
  variant?: any;
};

export default function Testimonials({ slices }: Testimonials) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { amount: 0.5, once: true });
  const testimonials = slices[4].primary.testimonials;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.3"],
  });

  const showVariant: Variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animated: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        easings: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="testimonialSection relative flex flex-wrap mt-80 justify-center">
      <div className="container-lg" ref={container}>
        <motion.h2
          ref={titleRef}
          className="text-yellow-500 text-1xl font-bold uppercase"
          initial="initial"
          variants={showVariant}
          animate={inView ? "animated" : "initial"}
        >
          Colleague & Clients
        </motion.h2>
        <TextBlock
          content="I've had the privilege to work with and for some great people."
          container={container}
          bold={true}
        />
      </div>
      <div className="flex justify-between mt-40">
        <div className="testinomalsWrap w-full md:w-6/12">
          {testimonials.map((test: any, index: number) => {
            return (
              <TestinomalBlock key={`test${index}`} variant={showVariant}>
                <div className="w-full ">
                    <h3 className="text-white font-normal text-2xl leading-normal mb-10">
                      {test.content[0].text}
                    </h3>
                    <p className="text-yellow-500 text-lg">{test.author}</p>
                    <p className="text-gray-500 text-lg">{test.company}</p>
                </div>
              </TestinomalBlock>
            );
          })}
        </div>
        <div className="testinomalAvatars sticky top-[60%]">
          {testimonials.map((av: any, av_index: number) => {
            return (
              <Avatar key={`av${av_index}`} className="w-[100px] h-[100px]">
                <AvatarImage src={av.image.url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            );
          })}
          ;
        </div>
      </div>
    </section>
  );
}

const TestinomalBlock = ({ children, variant }: Testimonial) => {
  const skillRef = useRef(null);
  const inView = useInView(skillRef, { amount: 0.5, once: true });

  return (
    <motion.div
      ref={skillRef}
      initial="initial"
      variants={variant}
      animate={inView ? "animated" : "initial"}
      className="testimonialBox container py-20 border-gray-50/10 border-solid border-t-[1px] relative"
    >
      {children}
    </motion.div>
  );
};
