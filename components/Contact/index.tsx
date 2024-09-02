import React from 'react'

import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';

import contact from '@/json/contact.json';

const Contact = () => {
  return (
    <div className="flex lg:justify-between justify-center w-full lg:px-10 flex-wrap gap-10 lg:gap-0">
        {/* Email */}
        <a
        href={`mailto:${contact.email.link}`}
        className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-evenly items-center gap-3"
        >
            <div className="flex flex-col justify-center items-center gap-3 pt-5">
                <Image src={"/Gmail_Logo.png"} alt="gmail logo" width={75} height={75} className="" />
                <p className="text-xl">E-Mail</p>
            </div>
            <code className="text-blue-400 text-lg -mt-5 contactLink">{contact.email.display}</code>
        </a>

        {/* LinkedIn */}
        <a
        href={contact.linkedin.link}
        className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
        >
            <div className="flex flex-col justify-center items-center gap-3">
                <Image src={"/linkedin.png"} alt="gmail logo" width={75} height={75} />
                <p className="text-xl">LinkedIn</p>
            </div>
            <code className="text-blue-400 text-lg contactLink">{contact.linkedin.display}</code>
        </a>

        {/* Github */}
        <a
        href={contact.github.link}
        className="lg:w-[30%] w-[100%] h-52 flex flex-col shadow-xl rounded bg-[#1e1e1eaa] hover:bg-[#1e1e1e] transition justify-center items-center gap-3"
        >
            <div className="flex flex-col justify-center items-center gap-3">
                <BsGithub size={75} />
                <p className="text-xl">GitHub</p>
            </div>
            <code className="text-blue-400 text-lg contactLink">{contact.github.display}</code>
        </a>
    </div>
  )
}

export default Contact