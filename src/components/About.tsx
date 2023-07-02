"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto max-w-7xl items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="/images/thePhoto.png"
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">
          My natural curiosity for software development has been a driving force
          in my journey as a professional in the field. I've always been
          captivated by the endless possibilities of creating and building
          digital experiences using code. From crafting intuitive user
          interfaces to solving complex technical challenges, I thrive on the
          opportunity to combine my technical skills with my passion for
          problem-solving. As a software developer, I constantly seek to expand
          my knowledge and stay up-to-date with the latest industry trends,
          frameworks, and technologies. This ever-evolving landscape motivates
          me to continuously refine my skills and deliver innovative solutions.
          With a strong foundation in web development and software engineering,
          I am dedicated to creating robust, efficient, and user-centric
          applications that make a positive impact. I am excited to collaborate
          with like-minded professionals and contribute to the dynamic world of
          web and software development, where possibilities are limited only by
          our imagination.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
