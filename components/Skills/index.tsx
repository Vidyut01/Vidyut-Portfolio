import React from 'react'

import skills from '@/json/skills.json';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full lg:px-10'>
        {skills.map((e, i) => (
            <div key={i} className='mt-5'>
                <h2 className='text-2xl'>{e.type}</h2><br/>
                <div className='flex lg:justify-evenly flex-wrap'>
                    {e.skills.slice(0, 5).map((s, ind) => 
                        <Image src={s.icon} alt='skill icon' width={100} height={100} key={ind} className='sm:mb-0 mb-3 sm:mr-0 mr-1'/>
                    )}
                </div>
            </div>
        ))}
        <p className='text-2xl w-full text-center mt-10'>And More!</p>
    </div>
  )
}

export default Skills