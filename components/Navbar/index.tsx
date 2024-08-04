'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Fugaz_One } from "next/font/google"

import { AnimatePresence } from "framer-motion"
import { IoMenu } from "react-icons/io5"

import NavItem from "./NavItem"
import MobileNavModal from "./MobileNavModal"
import { AiFillGithub } from "react-icons/ai"
import { Twirl as Hamburger } from "hamburger-react"


const headingFont = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

const Navbar = () => {
  const currentRoute = usePathname();
  
  const [isTransparent, setIsTransparent] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleScroll = () => {
    const scroll = window.scrollY;
    const shouldBeTransparent = scroll <= 190;
    if (shouldBeTransparent === isTransparent) return;
    setIsTransparent(shouldBeTransparent);
  };
  
  useEffect(() => {
    handleScroll();
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent]);

  return (
    <nav className={`z-50 h-16 fixed top-0 w-full flex px-32 items-center justify-between ${isTransparent ? 'bg-transparent' :' bg-[#1f1d1d]'} transition duration-200 animate-fade-nav`}>
        <h1 className="text-3xl font-bold w-full text-center min-[1030px]:text-left">
          <a href="#" className={headingFont.className} onClick={() => setIsModalOpen(false)}>
            Vidyut
            <span className="hidden sm:inline"> Venkatesan</span>
            <span className="sm:hidden"> V.</span>
          </a>
          <code className="text-2xl hidden min-[1200px]:inline"> {currentRoute != '/' && currentRoute}</code>
        </h1>
        <aside className="min-[1030px]:flex hidden items-center">
            <NavItem name="Experience" href="#experience" />
            <NavItem name="Projects" href="#projects" />
            <NavItem name="Skills" href="#skills" />
            <NavItem name="Education" href="#education" />
            <NavItem name="Contact" href="#contact" />
            <a href="https://github.com/Vidyut01"><AiFillGithub size={30} className="ml-5" /></a>
        </aside>
        <span className="min-[1030px]:hidden hover:cursor-pointer absolute right-5 top-1.5 flex items-center gap-2">
          <a href="https://github.com/Vidyut01"><AiFillGithub size={30} className="ml-5" /></a>
          <Hamburger toggled={isModalOpen} toggle={setIsModalOpen} size={25} />
        </span>
        <div className="min-[1030px]:hidden">
          <AnimatePresence
            initial={false}
          >
            {isModalOpen && <MobileNavModal closeHandler={setIsModalOpen} headingFont={headingFont} />}
          </AnimatePresence>
        </div>
    </nav>
  )
}

export default Navbar