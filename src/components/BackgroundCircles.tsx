import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[170px] w-[170px] mt-[180px] animate-ping" />
      <div className="rounded-full border border-[#333333] h-[270px] w-[270px] absolute mt-[180px]" />
      <div className="rounded-full border border-[#333333] h-[470px] w-[470px] absolute mt-[180px]" />
      <div className="rounded-full border border-[#008080] opacity-20 h-[620px] w-[620px] absolute mt-[180px] animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[780px] w-[780px] absolute mt-[180px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
