'use client'
import React from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

// NavItem Component
const NavItem = ({ text, link = "/", className = "" }) => (

  <Link
    href={link}
    className={`nav-item
      text-white/80 hover:text-white 
      transition-colors duration-300 
      font-medium text-sm 
      ${className}
    `}
  >
    {text}
  </Link>
)

  
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:p-6 bg-black/30 backdrop-blur-md ">

        <div className="font-bold flex items-center">
          <Link href="/">
            <Image 
              src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png"
              alt="logo"
              className="w-24 lg:w-36 h-auto"
              width={144} // Add width prop
              height={48} // Add height prop
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavItem text="Home" link="/" />
          <NavItem text="Services" link="/service" />
          {/* <NavItem text="Build" link="#build" /> */}
          <NavItem text="Projects" link="/projects" />
          <NavItem text="Resources" link="/blogs" />
          {/* <NavItem text="Careers" link="/career" /> */}
          <NavItem text="About Us" link="/aboutUs" />
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed top-20 left-0 right-0 bg-black/95 py-4 lg:hidden ">
            <div className="flex flex-col items-center gap-4">
              <NavItem text="Home" link="/" />
              <NavItem text="Service" link="/service" />
              <NavItem text="Projects" link="/projects" />
              <NavItem text="Resources" link="/blogsView" />
              <NavItem text="About Us" link="/aboutUs" />
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar