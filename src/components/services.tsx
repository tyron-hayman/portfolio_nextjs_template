"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  Variants,
} from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

type Services = {
  slices?: any;
};

type Service = {
  service?: string;
  content?: string;
  price?: number;
  monthly?: boolean;
  button_text?: string;
  animation?: any;
};

export default function ServicesBlock({ slices }: Services) {
  const container = useRef(null);
  const serices = slices[3].primary.services;
  const isInView = useInView(container, { once: true, amount: 0.2 });

  const slideIn: Variants = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animated: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        easings: "easeInOut",
      },
    },
  };

  return (
    <div className="relative my-[50vh] w-full flex justify-center items-center">
      <div ref={container} className="container relative z-[2]">
        <motion.div
          className="mb-20"
          variants={slideIn}
          initial={`initial`}
          animate={isInView ? "animated" : "initial"}
        >
          <h2 className="text-white font-bold text-6xl">
            {slices[3].primary.text}
          </h2>
          <p className="text-white font-normal text-3xl">
            {slices[3].primary.content}
          </p>
        </motion.div>
        <div className="md:grid mb-4 md:mb-0 md:grid-cols-4 md:gap-4">
          {serices.map((item: any, index: number) => {
            return (
              <Service key={`serv${index}`} {...item} animation={slideIn} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Service = ({
  service,
  content,
  price,
  monthly,
  button_text,
  animation,
}: Service) => {
  const box = useRef(null);
  const isInView = useInView(box, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={box}
      className="serviceBox bg-indigo-500 rounded-2xl overflow-hidden p-6"
      variants={animation}
      initial={`initial`}
      animate={isInView ? "animated" : "initial"}
    >
      <h3 className="text-white text-2xl font-bold">{service}</h3>
      {monthly ? (
        <>
          <p className="mt-5 text-indigo-300 text-lg font-bold">
            <span className="text-5xl text-white">${price}</span> / Month
          </p>
          <p className="mt-2 text-md leading-relaxed">
            <span className="text-xs text-indigo-200 block">
              * Restrictions apply.
            </span>
          </p>
        </>
      ) : (
        <>
          <p className="mt-5 text-indigo-300 text-lg font-bold">
            <span className="text-5xl text-white">${price}</span> / Starting
            From
            <span></span>
          </p>
          <p className="mt-2 text-md leading-relaxed">
            <span className="text-xs text-indigo-200 block">
              * A more accurate quote will be calculated upon request
            </span>
          </p>
        </>
      )}
      <p className="text-white text-lg py-7 min-h-[300px]">{content}</p>
      <Dialog>
        <DialogTrigger className="text-white py-2 px-10 text-lg border-indigo-300 border-[1px] border-solid rounded-full transition hover:text-black hover:bg-white">
          {button_text}
        </DialogTrigger>
        <DialogContent className="bg-black border-gray-900 border-[1px] border-solid rounded-2xl">
          {monthly ? (
            <DialogHeader>
              <DialogTitle className="text-white text-3xl font-bold">
                {service}
              </DialogTitle>
              <DialogDescription className="text-xl text-white py-2">
                Please provide details using the form below.
              </DialogDescription>
            </DialogHeader>
          ) : (
            <DialogHeader>
              <DialogTitle className="text-white text-3xl font-bold">
                <span className="text-lg text-gray-600 block">Quote for</span>
                {service}
              </DialogTitle>
              <DialogDescription className="text-xl text-white py-2">
                Please provide details using the form below. I will reply within
                5 business days with a quote for your project.
              </DialogDescription>
            </DialogHeader>
          )}
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button className="text-white border-gray-800 border-[1px] border-solid rounded-full transition hover:text-black hover:bg-white py-2 px-10">
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
