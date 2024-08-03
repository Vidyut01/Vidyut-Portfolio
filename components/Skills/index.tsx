import React from 'react'

import skills from '@/json/skills.json';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full px-10'>
        {skills.map((e, i) => (
            <div key={i} className='mt-5'>
                <h2 className='text-2xl'>{e.type}</h2><br/>
                <div className='flex justify-evenly'>
                    {e.skills.map((s, ind) => 
                        <Image src={s.icon} alt='skill icon' width={100} height={100} key={ind} />
                    )}
                </div>
            </div>
        ))}
        <p className='text-2xl w-full text-center mt-10'>And More!</p>
    </div>
  )
}

export default Skills