'use client'

import React from 'react'
import { NextFont } from 'next/dist/compiled/@next/font'

import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

import NavItem from './NavItem'

const MobileNavModal = ({
  closeHandler,
  headingFont
}: {
  closeHandler: React.Dispatch<React.SetStateAction<boolean>>,
  headingFont: NextFont
}) => {
  return (
    <motion.div
      onClick={e => {e.stopPropagation(); closeHandler(false)}}
      className="z-[-10] fixed top-0 left-0 w-screen h-screen"
      initial={{ y: '-100vh', opacity: 0 }}
      animate={{ y: '0', opacity: 1 }}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: .3 }}
    >
      <div 
        className='bg-[#1f1d1d] flex flex-col items-center justify-center h-[60%] max-[390px]:h-[70%]'
        onClick={e => e.stopPropagation()}
      >
        <NavItem name="Experience" href="#experience" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Projects" href="#projects" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Skills" href="#skills" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Education" href="#education" className='my-5' onClick={() => {closeHandler(false)}} />
        <hr className='bg-gray-600 w-[80%] rounded-full border-gray-600' />
        <NavItem name="Contact" href="#contact" className='my-5' onClick={() => {closeHandler(false)}} />
      </div>
    </motion.div>
  )
}

export default MobileNavModal