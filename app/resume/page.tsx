'use client'

import React from 'react'
import { Fugaz_One } from 'next/font/google';

import { motion } from 'framer-motion'

const headingFont = Fugaz_One({
    weight: '400',
    subsets: ['latin'],
});

const Resume = () => {
  return (
    <div className='mt-16 mx-12 lg:mx-36 mb-10'>
      <motion.header
        className='h-[50vh] flex flex-col lg:flex-row items-center justify-evenly'
        initial={{ opacity: 0, y: '100px' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 1 }}
      >
        <div className='text-center'>
          <h1 className={`text-4xl mb-10 ${headingFont.className}`}>Resume</h1>
          <h3 className='text-2xl'>My professional journey and experiences:</h3>
        </div>  
      </motion.header>

      <main>
        
      </main>
    </div>
  )
}

export default Resume
