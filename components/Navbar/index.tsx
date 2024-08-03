'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Fugaz_One } from "next/font/google"
import Link from "next/link"

import { AnimatePresence } from "framer-motion"
import { IoMenu } from "react-icons/io5"

import NavItem from "./NavItem"
import MobileNavModal from "./MobileNavModal"


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
        <h1 className="text-3xl font-bold w-full text-center lg:text-left">
          <Link href={'/'} className={headingFont.className}>
            Vidyut
            <span className="hidden sm:inline"> Venkatesan</span>
            <span className="sm:hidden"> V.</span>
          </Link>
          <code className="text-2xl hidden min-[1200px]:inline"> {currentRoute != '/' && currentRoute}</code>
        </h1>
        <aside className="min-[940px]:flex hidden">
            <NavItem name="Projects" href="#projects" />
            <NavItem name="Experience" href="#experience" />
            <NavItem name="Contact" href="#contact" />
        </aside>
        <IoMenu size={30} className="min-[940px]:hidden hover:cursor-pointer absolute right-5 top-5" onClick={() => setIsModalOpen(true)} />
        <div className="min-[940px]:hidden">
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