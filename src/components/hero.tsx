"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Leva } from "leva";
import Image from "next/image";
import me from "@/app/assets/me.jpeg";

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
  loading: () => <div className="flex h-screen items-center justify-center relative"><img src="/placeholder.png"></img></div>
});

type Hero = {
  data?: any;
  progress?: any;
};

export default function Hero({ data }: Hero) {
  const avatartSrc = data.slices[2].primary.image.url;
  const heading = data.hero_text.split(" ")
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section ref={container} className="heroSection relative">
      <div className="absolute inset-y-0 inset-x-0 z-[2] flex items-center justify-center">
        <div className="container">
          <motion.h1 className="text-white font-black" style={{ y }}>
            <span dangerouslySetInnerHTML={{ __html: data.hero_text }}></span>
          </motion.h1>
        </div>
      </div>
      <div className="relative h-screen">
        <Scene title={data.slices[0].primary.hero_text} />
        <Leva hidden />
      </div>
    </section>
  );
}
