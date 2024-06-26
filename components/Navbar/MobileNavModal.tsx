'use client'

import React from 'react'
import NavItem from './NavItem'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { NextFont } from 'next/dist/compiled/@next/font'

const MobileNavModal = ({closeHandler, headingFont}: {closeHandler: React.Dispatch<React.SetStateAction<boolean>>, headingFont: NextFont}) => {
  return (
    <motion.div
      onClick={e => e.stopPropagation()}
      className="z-[100] absolute top-0 left-0 w-screen bg-gray-400 h-screen"
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: '0', opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ duration: .3 }}
    >
      <h1 className="text-3xl font-bold w-full text-center absolute top-3">
        <span className={headingFont.className}>
          Vidyut
          <span className="hidden sm:inline"> Venkatesan</span>
          <span className="sm:hidden"> V.</span>
        </span>
      </h1>
      <div className='fixed right-5 top-5'>
        <IoClose size={30} onClick={() => closeHandler(false)} />
      </div>
      <div className='flex flex-col items-center justify-center h-full'>
        <NavItem name="Home" href="/" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Projects" href="/projects" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Resume" href="/resume" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Contact" href="/contact" className='my-5' onClick={() => {closeHandler(false)}} />
      </div>
    </motion.div>
  )
}

export default MobileNavModal