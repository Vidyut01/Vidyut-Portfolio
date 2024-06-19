'use client'

import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const currentRoute = usePathname();
  
  const [isTransparent, setIsTransparent] = useState(true);
  
  const handleScroll = () => {
    const scroll = window.scrollY;
    const shouldBeTransparent = scroll <= 190;
    if (shouldBeTransparent === isTransparent) return;
    setIsTransparent(shouldBeTransparent);
  };

  useEffect(() => {
    if (currentRoute === '/') handleScroll();
  }, []);

  useEffect(() => {
    if (currentRoute === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isTransparent]);

  return (
    <nav className={`h-16 fixed top-0 w-full flex px-10 items-center justify-between ${isTransparent ? 'bg-transparent' :' bg-[#72b7f8]'} transition duration-200`}>
        <h1 className="text-3xl font-bold">Vidyut Venkatesan <code className="text-2xl">{currentRoute != '/' && currentRoute}</code></h1>
        <aside className="flex">
            <NavItem name="Home" href="/" />
            <NavItem name="About" href="/about" />
            <NavItem name="Projects" href="/projects" />
            <NavItem name="Resume" href="/resume" />
            <NavItem name="Contact" href="/contact" />
        </aside>
    </nav>
  )
}

export default Navbar