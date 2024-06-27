'use client'

import React from 'react'

import { Card } from 'react-daisyui'
import { motion } from 'framer-motion'

const ResumeCard = ({title, subtitle, duration, children, minCardSize}: {
  title: string,
  subtitle: string,
  duration: string,
  children?: Readonly<React.ReactNode>,
  minCardSize?: number
}) => {
  const minH = `min-h-${minCardSize}`;
    
  return (
    <motion.div 
      className={`xl:w-[48%] w-full  p-5 rounded-lg mb-5 h-fit ${minCardSize && minH}  `}
      initial={{ opacity: 0, y: '100px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 1 }}
    >
      <Card.Body>
        <Card.Title className='text-xl flex justify-between'>
          <h2 className='font-extrabold'>{title}</h2>
          <h2 className='hidden sm:block'>{duration}</h2>
        </Card.Title>
        <h3 className='text-xl'>{subtitle}</h3>
        <h2 className='text-xl sm:hidden mt-4'>{duration}</h2>
        <br/>
        <p>{children}</p>
      </Card.Body>
    </motion.div>
  )
}

export default ResumeCard;
