"use client";

import Intro from "@/components/Intro";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const tl = useRef(null);

  const handleOnloadImage = () => {
    setIsLoaded(true);
  }

  useGSAP(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".mira-container",
          start: "top 40%",
          end: "+=1000",
          pin: true,
          scrub: 1,
        },
      })
      .to(".hai-mira", {
        y: 0,
      })
      .to(".makasih", {
        y: 0,
      })
      .to(".heart", {
        opacity: 1,
      })
      .to(".rose", {
        opacity: 1,
      })
      .to(".moon", {
        opacity: 1,
      })
      .to(".sparkle", {
        opacity: 1,
      });
  });

  return (
    <main className="overflow-x-hidden">
      <div className={`h-[100svh] w-full bg-gray-950 absolute top-0 left-0 z-20 flex justify-center items-center transition-all duration-500 ${isLoaded ? "pointer-events-none opacity-0" : "opacity-100"}`}>
        <span>Loading some good stuff...</span>
      </div>
      <Intro handleOnloadImage={handleOnloadImage} />
      <div className="text-center mira-container">
        <div className="text-6xl overflow-y-hidden">
          <p className="hai-mira translate-y-full">Hai, Mira.</p>
        </div>
        <div className="overflow-y-hidden my-2">
          <p className="makasih translate-y-full">Makasih ya udh jadi first visitorku ehe</p>
        </div>
        <p className="text-xl">
          <span className="heart opacity-0">❤</span>
          <span className="rose opacity-0">🌹</span>
          <span className="moon opacity-0">🌙</span>
          <span className="sparkle opacity-0">✨</span>
        </p>
      </div>
    </main>
  );
}
