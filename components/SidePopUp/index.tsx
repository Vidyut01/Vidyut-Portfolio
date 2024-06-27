'use client'

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const LeftSidePopUp = ({title, image, children}: {
  title: string,
  image: string,
  children: string
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:justify-between py-2"
      initial={{ opacity: 0, x: '-100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col lg:items-center justify-center m-10">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{children}</p>
      </div>
      <Image src={image} alt="project image" width={350} height={350} />
    </motion.div>
  )
};

const RightSidePopUp = ({title, image, children}: {
  title: string,
  image: string,
  children: string
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center lg:justify-between py-2"
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: '0' }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col justify-center m-10 text-right lg:hidden">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{children}</p>
      </div>
      <Image src={image} alt="project image" width={350} height={350} />
      <div className="w-full lg:flex flex-col items-center m-10 text-left hidden">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-20">{children}</p>
      </div>
    </motion.div>
  )
};

export { LeftSidePopUp, RightSidePopUp };
