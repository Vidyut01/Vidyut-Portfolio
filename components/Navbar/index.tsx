'use client'

import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Fugaz_One } from "next/font/google"
import MobileNavModal from "./MobileNavModal"
import { IoMenu } from "react-icons/io5"
import { AnimatePresence } from "framer-motion"


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
    <nav className={`z-50 h-16 fixed top-0 w-full flex px-32 items-center justify-between ${isTransparent ? 'bg-transparent' :' bg-[#e2e2e2]'} transition duration-200 animate-fade-nav`}>
        <h1 className="text-3xl font-bold w-full text-center lg:text-left">
          <Link href={'/'} className={headingFont.className}>
            Vidyut
            <span className="hidden sm:inline"> Venkatesan</span>
            <span className="sm:hidden"> V.</span>
          </Link>
          <code className="text-2xl hidden min-[1200px]:inline"> {currentRoute != '/' && currentRoute}</code>
        </h1>
        <aside className="min-[940px]:flex hidden">
            <NavItem name="Home" href="/" />
            <NavItem name="About" href="/about" />
            <NavItem name="Projects" href="/projects" />
            <NavItem name="Resume" href="/resume" />
            <NavItem name="Contact" href="/contact" />
        </aside>
        <IoMenu size={30} className="min-[940px]:hidden hover:cursor-pointer fixed right-5 top-5" onClick={() => setIsModalOpen(true)} />
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