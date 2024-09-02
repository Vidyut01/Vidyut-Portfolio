import React from 'react'

import { AiFillGithub } from 'react-icons/ai';
import ResumeCard from '^/ResumeCard'

import projects from '@/json/projects.json';


const Projects = () => {
  return (
    <div className="lg:px-10 w-full">
        {projects.slice(0,3).map((e, i) => 
        <ResumeCard
            key={i}
            title={e.title}
        >
            <div className="text-xl">
            {e.content}
            </div>
            <br/>
            <div className="text-lg italic">
            <b>Technologies Used:</b> {e.stack}
            </div>
            <br/>
            {e.repo && <a href={e.repo}><AiFillGithub size={35} /></a>}
        </ResumeCard>
        )}
    </div>
  )
}

export default Projects