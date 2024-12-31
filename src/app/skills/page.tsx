"use client"
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShareAlt, FaFacebook, FaMoon, FaSun, FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import BgLines from "@/components/BgLines";
import Skills from "@/components/Skills";
const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
    )
  }

  return (
    <div suppressHydrationWarning>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="dark-mode">
            <span suppressHydrationWarning>
              {theme === 'dark' ? (
                <FaMoon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <FaSun className="h-[1.2rem] w-[1.2rem]" />
              )}
            </span>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="content-dark-mode">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
// Add context to manage menu state
const MenuContext = React.createContext<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
}>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

const MobileMenuBar = () => {
  const { toggleMenu } = React.useContext(MenuContext);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
      <div className="text-lg font-medium name">
        <Link href='/' className="flex items-center gap-2 text-black dark:text-white">
          <Image src='/img/site-logo.svg' width={29} height={28} alt="Site Logo" />
          <span>CV</span>
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="w-12 h-12 border rounded-full menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        type="button"
        aria-label="Toggle Mobile Menu">
        <svg viewBox="0 0 20 12" className="w-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z" className="fill-theme dark:fill-white" />
        </svg>
      </button>
    </div>
  )
}
const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = React.useContext(MenuContext);

  return (
    <div className={`mobile-menu fixed top-0 w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 ${
      isMenuOpen ? 'right-0' : '-right-full'
    } py-12 px-8 overflow-y-scroll`}>
      <button
        onClick={toggleMenu}
        className="absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack hover:bg-gray-700 transition-colors"
        aria-label="Close Menu">
        ✕
      </button>
      
      <div className="mb-6 text-lg font-medium text-black dark:text-white">Menu</div>
      

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div className="mb-4 font-medium text-black dark:text-white">
        Socials
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/rinlee138" target="_blank" className="text-gray-600 hover:text-theme dark:text-gray-400 dark:hover:text-white transition-colors">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://github.com/Jacklinh?tab=repositories" target="_blank" className="text-gray-600 hover:text-theme dark:text-gray-400 dark:hover:text-white transition-colors">
            <FaGithub  size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const NavRight = () => {
  
  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
      <div className="flex border rounded-full w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack transition-all">
        <Link href="/">
          <Image src="/img/site-logo.svg" width={29} height={29} alt="Site Logo" priority />
        </Link>
      </div>
      <div className="relative share group">
        <button
          className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white transition-colors"
          aria-label="Share"
        >
          <FaShareAlt />
        </button>
        
        <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1">
          <Link href="https://www.facebook.com/rinlee138" target="_blank" className="text-gray-600 hover:text-theme dark:text-gray-400 dark:hover:text-white transition-colors">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://github.com/Jacklinh?tab=repositories" target="_blank" className="text-gray-600 hover:text-theme dark:text-gray-400 dark:hover:text-white transition-colors">
            <FaGithub  size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const PageSkills = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
  
    // Mount check for hydration
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
  
    useEffect(() => {
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);
  
    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
      return null; // or a loading spinner/skeleton
    }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="relative pt-10 max-xl:pt-20">
          {/* Overlay */}
          <div 
            className={`menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-998 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={toggleMenu}
          />
          
          <div className="max-lg:px-4">
            <MobileMenuBar />
            <MobileMenu />
            <Profile />
            <NavRight />
            
            <main className="relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
              <div className="py-5 xl:py-3.5 max-w-content max-xl:mx-auto xl:ml-auto xl:max-2xl:max-w-50rem">
                <Skills />
              </div>
            </main>
            
            <Footer />
          </div>
        </div>
        <BgLines />
        <div suppressHydrationWarning>
          <ModeToggle />
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default PageSkills;