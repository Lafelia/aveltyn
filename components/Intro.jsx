"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AveltynStroke from "./AveltynStroke";
import AveltynFill from "./AveltynFill";
import ShortDesc from "./ShortDesc";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Intro = () => {
  const tl = useRef(null);

  useGSAP(() => {
    const shortDesc = new SplitType(".short-desc");

    tl.current = gsap
      .timeline()
      .to(".aveltyn-fill", {
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      })
      .to(
        ".aveltyn-stroke",
        {
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".aveltyn-wrapper", {
              scrollTrigger: {
                trigger: ".aveltyn-wrapper",
                start: "10% top",
                end: "bottom top",
                scrub: 1,
              },
              xPercent: -10,
            });
            gsap.to(".aveltyn-stroke-wrapper", {
              scrollTrigger: {
                trigger: ".aveltyn-wrapper",
                start: "10% top",
                end: "170% top",
                scrub: 1,
              },
              xPercent: 10,
            });
          },
        },
        "-=1.3"
      )
      .to(
        ".hello-wrapper",
        {
          width: "6rem",
          duration: 1,
        },
        "<"
      )
      .to(
        ".hello",
        {
          y: 0,
          duration: 1,
        },
        "<"
      )
      .to(
        ".line-hello",
        {
          width: "2.5rem",
          duration: 0.5,
        },
        "-=150%"
      )
      .to(
        ".bintang-atas",
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        "<"
      )
      .to(
        ".bintang-bawah",
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        "-=0.5"
      )
      .set(
        ".short-desc",
        {
          opacity: 1,
        },
        "-=1.5"
      )
      .set(
        shortDesc.lines,
        {
          overflowY: "hidden",
        },
        "<"
      )
      .from(
        shortDesc.words,
        {
          color: "#030712",
          yPercent: 100,
          duration: 0.5,
          ease: "power1.out",
          stagger: {
            amount: 0.8,
          },
        },
        "-=1.5"
      );
  });

  return (
    <div className="h-[100svh] relative">
      <AveltynFill />
      <div className="absolute right-20 bottom-[40%] aveltyn-stroke-wrapper overflow-y-hidden z-10">
        <AveltynStroke />
      </div>
      <ShortDesc />
    </div>
  );
};

export default Intro;
