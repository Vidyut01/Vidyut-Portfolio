'use client'

import React from 'react'
import { Fugaz_One } from 'next/font/google';

import { motion } from 'framer-motion'
import { Card } from 'react-daisyui';

import ResumeCard, { Divider } from '^/ResumeCard';

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
            <ResumeCard minCardSize={52}>
              <ResumeCard.Title>Website Administrator</ResumeCard.Title>
              <ResumeCard.Subtitle>RMIT Information Security Collective</ResumeCard.Subtitle>
              <ResumeCard.Duration>Dec 2023 - Present</ResumeCard.Duration>
              <ResumeCard.Content>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero ea delectus beatae sint, magni aliquid velit doloremque voluptatum eos expedita tempora laborum magnam illo quam alias modi explicabo harum?.
              </ResumeCard.Content>
            </ResumeCard>

            <ResumeCard minCardSize={52}>
              <ResumeCard.Title>Website Administrator</ResumeCard.Title>
              <ResumeCard.Subtitle>RMIT Information Security Collective</ResumeCard.Subtitle>
              <ResumeCard.Duration>Dec 2023 - Present</ResumeCard.Duration>
              <ResumeCard.Content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellendus maiores quae dolores odit perspiciatis praesentium, tempore aut totam quas rem, libero hic nulla saepe modi. Ipsum suscipit minus obcaecati.
              </ResumeCard.Content>
            </ResumeCard>
          </div>
        </section>

        <br/>

        <section>
          <h2 className={`text-3xl ${headingFont.className}`}>Education:</h2>
          <hr className='my-3 border-black rounded-full' />
          <div className='flex flex-wrap justify-between text-[#2e2e2e]'>
            <ResumeCard>
              <ResumeCard.Title>RMIT University</ResumeCard.Title>
              <ResumeCard.Subtitle>Bachelor of Software Engineering</ResumeCard.Subtitle>
              <ResumeCard.Duration>Feb 2022 - Nov 2025</ResumeCard.Duration>
            </ResumeCard>
          </div>
        </section>

        <br/>

        <section>
          <h2 className={`text-3xl ${headingFont.className}`}>My Skills:</h2>
          <hr className='my-3 border-black rounded-full' />
        </section>
      </main>
    </div>
  )
}

export default Resume
