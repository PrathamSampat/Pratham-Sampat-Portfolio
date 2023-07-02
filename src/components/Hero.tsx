"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Pratham Sampat",
      "<FueledByAPassionForProgramming />",
      "<QuickAndEagerLearner />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col space-y-8 overflow-hidden ">
      <div className="flex  flex-col  items-center justify-center text-center mt-[280px]">
        <BackgroundCircles />
        <Image
          src="/images/thePhoto.png"
          alt=""
          width={150}
          height={150}
          className="relative rounded-full mt-[20px] object-cover"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
            web developer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#008080" />
          </h1>
        </div>

        <div className="pt-5 z-20">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
