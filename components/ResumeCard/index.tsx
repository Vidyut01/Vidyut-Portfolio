'use client'

import React from 'react'

import { Card } from 'react-daisyui'

const ResumeCard = ({title, subtitle, duration, children}: {
  title: string,
  subtitle?: string,
  duration?: string,
  children?: Readonly<React.ReactNode>,
}) => {    
  return (
    <div 
      className={`w-full lg:p-5 rounded-lg mb-5 h-fit`}
    >
      <Card.Body className='w-full'>
        <Card.Title className='text-xl flex justify-between items-center w-full'>
          <h2 className='font-extrabold text-4xl'>{title}</h2>
          {duration && <h2 className='hidden sm:block text-2xl'>{duration}</h2>}
        </Card.Title>
        <br/>
        {subtitle && <h3 className='text-2xl'>{subtitle}</h3>}
        {duration && <h2 className='text-xl sm:hidden mt-4'>{duration}</h2>}
        <br/>
        <div>{children}</div>
      </Card.Body>
    </div>
  )
}

export default ResumeCard;
