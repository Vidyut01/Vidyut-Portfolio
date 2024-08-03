import ResumeCard from '^/ResumeCard'
import React from 'react'

import resumeData from '@/json/resume.json';

const Experience = () => {
  return (
    <div className='w-full px-10'>
        {resumeData.experience.slice(0,3).map((e, i) => 
          <ResumeCard
              key={i}
              title={e.title}
              subtitle={e.subtitle}
              duration={e.duration}
          />
        )}
    </div>
  )
}

export default Experience