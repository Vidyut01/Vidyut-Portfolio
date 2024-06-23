'use client'

import React from 'react'
import { LeftSidePopUp, RightSidePopUp } from '^/SidePopUp'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='mt-16 mx-36 mb-10'>
      <LeftSidePopUp>
        <LeftSidePopUp.Title>
          Project 1
        </LeftSidePopUp.Title>

        <LeftSidePopUp.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
        </LeftSidePopUp.Content>

        <LeftSidePopUp.Image>
          <Image src={'/next.svg'} alt="pic" width={350} height={350} />
        </LeftSidePopUp.Image>
      </LeftSidePopUp>

      <RightSidePopUp>
        <RightSidePopUp.Title>
          Project 2
        </RightSidePopUp.Title>

        <RightSidePopUp.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non provident, rem ratione quisquam sint architecto cum. Ducimus porro sequi debitis architecto dolorum laboriosam id soluta, eveniet possimus ipsa quia.
        </RightSidePopUp.Content>
        
        <RightSidePopUp.Image>
          <Image src={'/next.svg'} alt="pic" width={350} height={350} />
        </RightSidePopUp.Image>
      </RightSidePopUp>
      
    </div>
  )
}

export default Projects