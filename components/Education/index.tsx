import React from 'react'

import ResumeCard from '^/ResumeCard'

import resumeData from '@/json/resume.json';

const Education = () => {
  return (
    <div className="lg:px-10 w-full">
        {resumeData.education.map((e, i) => 
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

export default Education