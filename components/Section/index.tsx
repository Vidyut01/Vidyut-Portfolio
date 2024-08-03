'use client'

import { motion } from "framer-motion";
import { Fugaz_One, Reem_Kufi } from "next/font/google";
import React from "react";

const subtitleFont = Reem_Kufi({
  weight: '400',
  subsets: ['latin']
})

const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Section = ({id, title, children, className, reverse = false}: {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
}) => {
  return (
    <section id={id} className={`flex flex-col items-center lg:flex-row lg:items-start justify-between overflow-hidden px-12 lg:px-32 mb-10 w-full ${className}`}>
      <motion.article
        className=" flex items-center mb-10 lg:mb-0 w-full h-full"
        initial={{ opacity: '0', y: '10em' }}
        whileInView={{ opacity: '1', y: '0' }}
        viewport={{ once: true }}
        transition={{ duration: .75 }}
      >
        {!reverse && <div className={`text-5xl w-[30%] h-full border-r grid place-items-center border-[#E6E6FA] ${headingFont.className}`}>
          {title}
        </div>}
        <div className="flex flex-col items-center w-[70%]">
          {children}
        </div>
        {reverse && <div className={`text-5xl w-[30%] h-full border-l grid place-items-center border-[#E6E6FA] ${headingFont.className}`}>
          {title}
        </div>}
      </motion.article>
    </section>
  )
}

export default Section