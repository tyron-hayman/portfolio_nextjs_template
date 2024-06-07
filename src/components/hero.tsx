"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Leva } from "leva";

const Scene = dynamic(() => import("@/components/scene"), {
  ssr: false,
});

type Hero = {
  data?: any;
  progress?: any;
};

export default function Hero({ data }: Hero) {
  return (
    <section className="heroSection relative">
      <div className="absolute inset-y-0 inset-x-0 z-[2] flex items-center justify-center">
        <div className="container">
          <h1 className="text-white font-bold" dangerouslySetInnerHTML={{ __html : data.hero_text }}></h1>
        </div>
      </div>
      <div className="relative h-screen">
        <Scene title={data.slices[0].primary.hero_text} />
        <Leva hidden />
      </div>
    </section>
  );
}
