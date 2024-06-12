"use client";
import Image from "next/image";
import Head from "next/head";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import { useEffect, useState, useRef, Suspense } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/work";
import About from "@/components/about";
import Experience from "@/components/experience";
import Testimonials from "@/components/testimonials";
import Loader from "@/components/loader";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const container = useRef(null);
  const client = createClient();
  const [pageData, setPageData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const page = await client.getSingle("landing");
      setPageData(page.data);
      setLoading(false);
      console.log(page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <Header data={pageData}/>
          <main ref={container} className="siteWrapper relative">
            <Hero data={pageData} />
            <About {...pageData} />
            <Experience {...pageData} />
            <Testimonials {...pageData} />
          </main>
        </ReactLenis>
      )}
      ;
    </>
  );
}
