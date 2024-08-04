'use client'

import React from 'react'
import { Fugaz_One } from 'next/font/google';

import { motion } from 'framer-motion';

import { LeftSidePopUp, RightSidePopUp } from '^/SidePopUp'
import projectData from '@/json/projects.json';

const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Projects = () => {
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
        {projectData.map((p, i) => 
          <>
          {i % 2 === 0 ? 
          <LeftSidePopUp title={p.title} image={p.stack}>
            {p.content}
          </LeftSidePopUp>
          : 
          <RightSidePopUp title={p.title} image={p.content}>
            {p.content}
          </RightSidePopUp>
          }

          {i !== projectData.length - 1 && 
          <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-gray-600 my-2" />
          }
          </>
        )}
      </main>
    </div>
  )
}

export default Projects