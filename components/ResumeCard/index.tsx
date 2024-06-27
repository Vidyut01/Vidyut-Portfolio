'use client'

import React from 'react'

import { Card } from 'react-daisyui'
import { motion } from 'framer-motion'

import useChildren from '@/hooks/useChildren'

const ResumeCard = ({children, minCardSize}: {
  children: Readonly<React.ReactNode>,
  minCardSize?: number
}) => {
  const title = useChildren(children, 'Title');
  const subtitle = useChildren(children, 'Subtitle');
  const content = useChildren(children, 'Content');
  const duration = useChildren(children, 'Duration');

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
        <p>{content}</p>
      </Card.Body>
    </motion.div>
  )
}

const Title = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;
const Subtitle = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;
const Content = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;
const Duration = ({children}: {children: Readonly<React.ReactNode>}) => <>{children}</>;

ResumeCard.Title = Title;
ResumeCard.Subtitle = Subtitle;
ResumeCard.Content = Content;
ResumeCard.Duration = Duration;

export default ResumeCard;
