"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AveltynStroke from "./AveltynStroke";
import AveltynFill from "./AveltynFill";
import ShortDesc from "./ShortDesc";
import SplitType from "split-type";
import blobTop from "../public/blobTop.webp";
import Image from "next/image";

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
        ".blobTop",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=1.5"
      )
      .to(
        ".border-bottom-nav",
        {
          scaleX: 1,
          duration: 0.5,
        },
        "<"
      )
      .to(
        ".nav-logo",
        {
          y: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".nav-item",
        {
          y: 0,
          duration: 1,
          stagger: {
            amount: 0.3,
          },
        },
        "<"
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
        ".bintang-atas",
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        ">"
      )
      .to(
        ".bintang-bawah",
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
        },
        "-=0.4"
      )
      .to(
        ".line-hello",
        {
          width: "2.5rem",
          duration: 0.5,
        },
        "-=150%"
      )

      .set(
        ".short-desc",
        {
          opacity: 1,
        },
        "-=1"
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
        "<"
      );
  });

  return (
    <div className="h-[100svh] relative">
      <div className="absolute -top-72 -left-[65%] w-[200vw] rotate-[17deg] -z-10 opacity-0 -translate-y-full blobTop">
        <Image src={blobTop} alt="Blob Top" />
      </div>
      <div className="flex justify-between items-center overflow-y-hidden navbar relative">
        <div className="absolute h-[1px] w-full scale-x-0 bottom-0 left-0 bg-gray-50/25 border-bottom-nav"></div>
        <div className="self-stretch flex items-center px-5 nav-logo-wrapper">
          <div className="overflow-hidden">
            <span className="inline-block -skew-x-12 translate-y-full nav-logo">aveltyn</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 text-sm pe-5 py-4">
          <div className="overflow-y-hidden">
            <span className="inline-block translate-y-full nav-item">ME</span>
          </div>
          <div className="overflow-y-hidden">
            <span className="inline-block translate-y-full nav-item">PROJECTS</span>
          </div>
          <div className="overflow-y-hidden">
            <span className="inline-block translate-y-full nav-item">CONTACT</span>
          </div>
        </div>
      </div>
      <AveltynFill />
      <div className="absolute right-20 bottom-[40%] aveltyn-stroke-wrapper overflow-y-hidden z-10">
        <AveltynStroke />
      </div>
      <ShortDesc />
    </div>
  );
};

export default Intro;
