'use client'

import React from 'react'
import { LeftSidePopUp, RightSidePopUp } from '^/SidePopUp'
import Image from 'next/image'
import { Fugaz_One } from 'next/font/google';
import { motion } from 'framer-motion';

const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Projects = () => {
  return (
    <div className='mt-16 mx-12 lg:mx-36 mb-10'>
      <motion.header
        className='h-screen flex flex-col lg:flex-row items-center justify-evenly'
        initial={{ opacity: 0, y: '100px' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 1 }}
      >
        <div className='text-center'>
          <h1 className={`text-4xl mb-10 ${headingFont.className}`}>My Projects</h1>
          <h3 className='text-2xl'>Here are some of the projects I&#39;ve worked on:</h3>
        </div>
        <figure>
          <Image src='/vercel.svg' alt='alt' width={300} height={300} />
        </figure>
      </motion.header>

      <main className='flex flex-col gap-20 overflow-hidden'>
        <LeftSidePopUp>
          <LeftSidePopUp.Title>
            Project 1
          </LeftSidePopUp.Title>
          
          <LeftSidePopUp.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
          </LeftSidePopUp.Content>

          <LeftSidePopUp.Image>
            <Image src={'/next.svg'} alt="pic" width={350} height={350} />
          </LeftSidePopUp.Image>
        </LeftSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <RightSidePopUp>
          <RightSidePopUp.Title>
            Project 2
          </RightSidePopUp.Title>

          <RightSidePopUp.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
          </RightSidePopUp.Content>
          
          <RightSidePopUp.Image>
            <Image src={'/next.svg'} alt="pic" width={350} height={350} />
          </RightSidePopUp.Image>
        </RightSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <LeftSidePopUp>
          <LeftSidePopUp.Title>
            Project 3
          </LeftSidePopUp.Title>
          
          <LeftSidePopUp.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
          </LeftSidePopUp.Content>

          <LeftSidePopUp.Image>
            <Image src={'/next.svg'} alt="pic" width={350} height={350} />
          </LeftSidePopUp.Image>
        </LeftSidePopUp>

        <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />

        <RightSidePopUp>
          <RightSidePopUp.Title>
            Project 4
          </RightSidePopUp.Title>

          <RightSidePopUp.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
          </RightSidePopUp.Content>
          
          <RightSidePopUp.Image>
            <Image src={'/next.svg'} alt="pic" width={350} height={350} />
          </RightSidePopUp.Image>
        </RightSidePopUp>
      </main>
    </div>
  )
}

export default Projects