import Image from "next/image";

import Section from "^/Section";
import BGParticles from "^/Particles";
import Experience from "^/Experience";
import ResumeCard from "^/ResumeCard";

import resumeData from '@/json/resume.json';
import projects from '@/json/projects.json';
import Skills from "^/Skills";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  
  return (
    <div className="w-full">
      <BGParticles />
      
      <header className="flex w-full h-screen flex-col lg:flex-row">
        <div className="h-16 lg:h-0"></div>
        <figure className="w-full mt-[10%] lg:mt-0 lg:h-auto grid lg:items-center lg:justify-end justify-center items-end animate-fade-header-mobile-fig lg:animate-fade-header">
          <Image src="/portrait.jpeg" alt="profile_image" className="rounded-full w-[300px] min-[400px]:w-[350px] lg:w-[400px] h-auto" width={400} height={400} />
        </figure>
        <span className="mx-20" />
        <div className="w-full h-auto grid lg:items-center lg:justify-normal justify-center animate-fade-header-mobile-text lg:animate-fade-header pt-20 lg:pt-0">
          <div className="text-center lg:text-left">
            <p className="text-3xl">Hi, my name is</p>
            <h2 className="text-4xl min-[400px]:text-5xl font-bold my-1">Vidyut Venkatesan</h2>
            <p className="text-3xl">I&#39;m a Software Engineer</p>
          </div>
        </div>
      </header>

      <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-[#E6E6FA] my-10" />
      
      {/* About Section */}
      <Section
        id="about"
        title="About"
        className="h-96 section"
      >
        <h2 className={`text-[3rem] text-center`}>Who am I ?</h2>
        <br/>
        <p className="text-xl max-w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae iusto eligendi odit dolore aut quasi consequuntur reiciendis, at hic incidunt odio cumque assumenda iste fuga quibusdam a voluptatibus in?</p>
      </Section>

      <div className="h-24"></div>

      <Section
        id="experience"
        title="Experience"
        className="h-[30rem] section"
        reverse
      >
        <Experience />
      </Section>

      <div className="h-24"></div>
      
      <Section
        id="projects"
        title="Projects"
        className="h-[1000px] section"
      >
        <div className="px-10 w-full">
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
                Tech Stack: {e.stack}
              </div>
            </ResumeCard>
          )}
        </div>
      </Section>
        
      <div className="h-24"></div>

      <Section
        id="skills"
        title="Skills"
        className="h-[55rem] section"
        reverse
      >
        <Skills />
      </Section>
      
      <div className="h-24"></div>

      <Section
        id="education"
        title="Education"
        className="h-[20rem] section"
      >
        <div className="px-10 w-full">
          {resumeData.education.map((e, i) => 
            <ResumeCard
              key={i}
              title={e.title}
              subtitle={e.subtitle}
              duration={e.duration}
            />
          )}
        </div>
      </Section>
      
      <div className="h-24"></div>
      
      <Section
        id="contact"
        title="Contact"
        className="h-[30rem] section"
        reverse
      >
        <div className="flex justify-between w-full px-10">
          <a
            href="mailto:vidyut0903@gmail.com"
            className="w-[30%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-evenly items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3 pt-5">
              <Image src={"/Gmail_Logo.png"} alt="gmail logo" width={75} height={75} className="" />
              <p className="text-xl">E-Mail</p>
            </div>
            <code className="text-blue-400 text-lg -mt-5">vidyut0903@gmail.com</code>
          </a>

          <a
            href="https://www.linkedin.com/in/vidyut-venkatesan"
            className="w-[30%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={"/linkedin.png"} alt="gmail logo" width={75} height={75} />
              <p className="text-xl">LinkedIn</p>
            </div>
            <code className="text-blue-400 text-lg">Vidyut Venkatesan</code>
          </a>

          <a
            href="tel:+61422484636"
            className="w-[30%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <FaPhoneAlt size={75} />
              <p className="text-xl">Phone</p>
            </div>
            <code className="text-blue-400 text-lg">+61 422484636</code>
          </a>

        </div>
      </Section>
      
    </div>
  );
}
