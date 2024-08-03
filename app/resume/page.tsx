'use client'

import React from 'react'
import { Fugaz_One } from 'next/font/google';

import { motion } from 'framer-motion'
import { Button } from 'react-daisyui';
import { BsDownload } from 'react-icons/bs';

import ResumeCard from '^/ResumeCard';
import resumeData from '@/json/resume.json';

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
        <section>
          <h2 className={`text-3xl ${headingFont.className}`}>Experience:</h2>
          <hr className='my-3 border-black rounded-full' />
          <div className='flex flex-wrap justify-between text-[#2e2e2e]'>
            {resumeData.experience.map((e, i) => 
              <ResumeCard
                key={i}
                title={e.title}
                subtitle={e.subtitle}
                duration={e.duration}
              >
                {e.content}
              </ResumeCard>
            )}
          </div>
        </section>

        <br/>

        <section>
          <h2 className={`text-3xl ${headingFont.className}`}>Education:</h2>
          <hr className='my-3 border-black rounded-full' />
          <div className='flex flex-wrap justify-between text-[#2e2e2e]'>
            {resumeData.education.map((e, i) => 
              <ResumeCard
                key={i}
                title={e.title}
                subtitle={e.subtitle}
                duration={e.duration}
              />
            )}
          </div>
        </section>

        <br/>

        <section>
          <h2 className={`text-3xl ${headingFont.className}`}>My Skills:</h2>
          <hr className='my-3 border-black rounded-full' />
        </section>

        <br/>

        <Button className='bg-slate-800 rounded-full p-4 text-white'>
          <BsDownload className='inline mr-1' /> Download Resume
        </Button>
      </main>
    </div>
  )
}

export default Resume
