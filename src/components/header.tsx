"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import me from "@/app/assets/me.jpeg";

type Header = {
  data?: any;
};

export default function Header({ data }: Header) {
  const avatartSrc = data.slices[2].primary.image.url;

  return (
    <div className="siteHeader fixed inset-x-0 top-0 z-[1000] backdrop-blur-sm bg-[#050505]/10">
      <div className="flex justify-between items-center p-5">
        <div className="siteHeader-left">
          <Avatar className="w-[50px] h-[50px] grayscale">
            <AvatarImage src={avatartSrc} />
            <AvatarFallback>Tyron Hayman</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
