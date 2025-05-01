'use client'

import Link from "next/link"
import Button from "./ui/Button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen])

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  
  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
        <div className="w-full lg:max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href={"/"}>
            <div className="relative w-[120px] h-[50px]">
              <Image src="/images/black-logo.png" alt="Luno logo" fill className="object-contain w-full h-full" />
            </div>
          </Link>
          <div className="hidden md:flex gap-1 font-main text-dark md:text-sm">
            {
              [
                "Features",
                "Solutions",
                "Pricing",
                "For Teams"
              ].map((item, index) => (
                <Link 
                  key={index} 
                  href="/" 
                  className="hover:bg-primary/20 py-3 px-4 rounded-full hover:text-primary transition-all duration-300 ease-in-out"
                >
                  {item}
                </Link>
              ))
            }
          </div>
          <div>
            <button className="md:hidden bg-transparent text-dark hover:bg-transparent hover:text-dark" onClick={toggleDrawer}>
              <Menu className="w-8 h-8"/>
            </button>
            <Button className={"hidden md:block"}>Sign Up</Button>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-[100px] h-[40px]">
              <Image src="/images/black-logo.png" alt="Luno logo" fill className="object-contain w-full h-full" />
            </div>
            <button onClick={toggleDrawer} className="w-10 h-10 p-0 bg-primary rounded-full flex items-center text-white justify-center">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 font-main">
            {
              [
                "Features",
                "Solutions",
                "Pricing",
                "For Teams"
              ].map((item, index) => (
                <Link 
                  key={index} 
                  href="/" 
                  className="hover:bg-primary/20 p-3 rounded-xl hover:text-primary hover:font-normal"
                  onClick={toggleDrawer}
                >
                  {item}
                </Link>
              ))
            }
            <div className="pt-4">
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar