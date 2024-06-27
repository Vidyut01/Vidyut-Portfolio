'use client'

import React from 'react'
import Image from 'next/image'
import { Fugaz_One } from 'next/font/google';

import { motion } from 'framer-motion';

import { LeftSidePopUp, RightSidePopUp } from '^/SidePopUp'

const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Projects = () => {
  const title = 'fdfdf';
  const content = 'gfdsgd';
  const img = '/next.svg';

  return (
    <div className='mt-16 mx-12 lg:mx-36 mb-10'>
      <motion.header
        className='h-[50vh] flex flex-col lg:flex-row items-center justify-evenly'
        initial={{ opacity: 0, y: '100px' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 1 }}
      >
        <div className='text-center'>
          <h1 className={`text-4xl mb-10 ${headingFont.className}`}>My Projects</h1>
          <h3 className='text-2xl'>Explore the projects I&#39;ve worked on and my achievements:</h3>
        </div>  
      </motion.header>

      <main className='flex flex-col gap-20 overflow-hidden'>
        <LeftSidePopUp title='Project 1' image='/next.svg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis qui explicabo consectetur deleniti soluta esse dignissimos accusamus reprehenderit. Harum, accusamus. Eveniet sit iste sint vitae ullam. Animi, nam magnam.
        </LeftSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <RightSidePopUp title='Project 1' image='/next.svg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati quam excepturi quo cum earum placeat dolor corrupti, aperiam dolores iusto id nesciunt velit veritatis voluptatibus quos officiis ipsam fuga.
        </RightSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <LeftSidePopUp title='Project 1' image='/next.svg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cupiditate dicta ea earum porro hic, sequi quisquam aliquid expedita laboriosam numquam illum praesentium neque minus magni, vitae nulla quod aut.
        </LeftSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <RightSidePopUp title='Project 1' image='/next.svg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem id ullam mollitia exercitationem voluptatum illo quaerat magnam sunt minus, rem obcaecati aperiam commodi eligendi illum vero tenetur vel. Temporibus?
        </RightSidePopUp>
      </main>
    </div>
  )
}

export default Projects