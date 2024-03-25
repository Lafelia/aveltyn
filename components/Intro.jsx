"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AveltynStroke from "./AveltynStroke";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Intro = () => {
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from(".aveltyn-fill", {
        xPercent: 10,
        duration: 1,
        autoAlpha: 0,
        ease: "power2.out",
      })
      .from(
        ".aveltyn-outline",
        {
          xPercent: -10,
          duration: 1,
          autoAlpha: 0,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".aveltyn-fill", {
              scrollTrigger: {
                trigger: ".aveltyn-fill",
                start: "10% top",
                end: "bottom top",
                scrub: 1.5,
                // markers: true,
              },
              xPercent: -15,
            });
            gsap.to(".aveltyn-outline", {
              scrollTrigger: {
                trigger: ".aveltyn-fill",
                start: "10% top",
                end: "160% top",
                scrub: 1.5,
                markers: true,
              },
              xPercent: 15,
            });
          },
        },
        "<"
      );
  });

  return (
    <>
      <span className="text-[12rem] tracking-[-1.2rem] absolute left-20 bottom-[60%] -skew-x-[15deg] aveltyn-fill invisible z-10">
        aveltyn
      </span>
      <div className="size-12 rounded-full bg-indigo-400 absolute right-0 top-20 -z-10"></div>
      <div className="absolute right-20 bottom-[40%] aveltyn-outline">
        <AveltynStroke />
      </div>
      {/* <span className="text-[12rem] tracking-[-1.2rem] absolute right-20 bottom-[35%] -skew-x-[15deg] aveltyn-outline invisible">
        aveltyn
      </span> */}
      {/* <span>aveltyn</span> */}
    </>
  );
};

export default Intro;
