import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import Section from "^/Section";
import BGParticles from "^/Particles";
import Experience from "^/Experience";
import ResumeCard from "^/ResumeCard";
import Skills from "^/Skills";

import resumeData from '@/json/resume.json';
import projects from '@/json/projects.json';
import contact from '@/json/contact.json';
import about from '@/json/about.json';
import { TbFileDownload } from "react-icons/tb";

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
        className="lg:h-96 section"
      >
        <p className="text-[21px] max-w-[80%] text-justify">
          {about.about}
          <br/>
          <a
            href="/resume/Vidyut_Resume.pdf"
            target="_blank"
            className="text-sm inline-block px-2 py-3 mt-5 duration-300 bg-gray-800 border-2 border-gray-700 rounded-md shadow-md hover:bg-gray-800 hover:text-blue-400 hover:border-gray-600 hover:shadow-lg active:shadow-sm"
          >
            <TbFileDownload size={20} className="inline align-middle" /> My Resume
          </a>
        </p>
      </Section>

      <div className="h-24"></div>

      <Section
        id="experience"
        title="Experience"
        className="lg:h-[30rem] -mb-20 lg:mb-0 section"
        reverse
      >
        <Experience />
      </Section>

      <div className="h-24"></div>
      
      <Section
        id="projects"
        title="Projects"
        className="lg:h-[1050px] -mb-20 lg:mb-0 section"
      >
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
      </Section>
        
      <div className="h-24"></div>

      <Section
        id="skills"
        title="Skills"
        className="lg:h-[55rem] -mb-20 lg:mb-0 section"
        reverse
      >
        <Skills />
      </Section>
      
      <div className="h-24"></div>

      <Section
        id="education"
        title="Education"
        className="lg:h-[20rem] -mb-20 lg:mb-0 section"
      >
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
      </Section>
      
      <div className="h-24"></div>
      
      <Section
        id="contact"
        title="Contact"
        className="lg:h-[30rem] section"
        reverse
      >
        <div className="flex lg:justify-between justify-center w-full lg:px-10 flex-wrap gap-10 lg:gap-0">
          <a
            href={`mailto:${contact.email.link}`}
            className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-evenly items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3 pt-5">
              <Image src={"/Gmail_Logo.png"} alt="gmail logo" width={75} height={75} className="" />
              <p className="text-xl">E-Mail</p>
            </div>
            <code className="text-blue-400 text-lg -mt-5">{contact.email.display}</code>
          </a>

          <a
            href={contact.linkedin.link}
            className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <Image src={"/linkedin.png"} alt="gmail logo" width={75} height={75} />
              <p className="text-xl">LinkedIn</p>
            </div>
            <code className="text-blue-400 text-lg">{contact.linkedin.display}</code>
          </a>

          <a
            href={`tel:${contact.phone.link}`}
            className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <FaPhoneAlt size={75} />
              <p className="text-xl">Phone</p>
            </div>
            <code className="text-blue-400 text-lg">{contact.phone.display}</code>
          </a>

        </div>
      </Section>
      
    </div>
  );
}
