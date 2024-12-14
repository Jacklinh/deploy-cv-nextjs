"use client"
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaPaperPlane,FaCheckDouble,FaUserAlt, FaFolderOpen, FaTasks, FaShareAlt,FaFacebook,FaMoon,FaSun } from "react-icons/fa";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const ModeToggle = () => {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark-mode"> 
          <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
const MobileMenuBar = () => {
  return (
    <div
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
                <div className="text-lg font-medium name">
                    <Link href='/' className="flex items-center gap-2 text-black dark:text-white">
                      <Image src='/img/site-logo.svg' width={29} height={28} alt="rincard" />
                      <span>CV</span>
                    </Link>
                </div>
                {/* Mobile Hamburger Menu Start */}
                <button
                    className="w-12 h-12 border rounded-full hamburger menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center"
                    type="button"
                    aria-label="Open Mobile Menu">
                    <svg viewBox="0 0 20 12" className="w-6"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
                            className="fill-theme dark:fill-white" />
                    </svg>
                </button>
                {/* Mobile Hamburger Menu End */}
            </div>
  )
}
const MobileMenu = () => {
  return (
    <div
        className="mobile-menu fixed top-0 -right-full w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 [&.is-menu-open]:right-0 py-12 px-8 overflow-y-scroll">
        <button
            className="absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack" aria-label="Close Menu">
            
        </button>
        <div className="mb-6 text-lg font-medium text-black dark:text-white menu-title">
            Menu
        </div>
        <ul className="space-y-5 font-normal main-menu">
            <li data-scroll-nav="0" className="relative group active">
                <Link href="#home" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Home
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="1" className="relative group">
                <Link href="#about" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        About
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="2" className="relative group">
                <Link href="#" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Service
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="3" className="relative group">
                <Link href="#skill" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Skills
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="4" className="relative group">
                <Link href="#resume" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Resume
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="5" className="relative group">
                <Link href="#portfolio" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Poftfolio
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="6" className="relative group">
                <Link href="#blog" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Blog
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="7" className="relative group">
                <Link href="#testimonial" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Testimonial
                    </span>
                </Link>
            </li>
            <li data-scroll-nav="8" className="relative group">
                <Link href="#contact" className="flex items-center space-x-2 group">
                    <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                        
                    </span>
                    <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                        Contact
                    </span>
                </Link>
            </li>
        </ul>
        <br /><br />
        <div className="mb-4 font-medium text-black dark:text-white menu-title text-md">
            Get in Touch
        </div>
        <div className="flex items-center space-x-4 social-icons *:flex">
            <Link href="#" title="Share with Facebook">Facebook</Link>
            <Link href="#" title="Share with Linkedin">Linkedin</Link>
            <Link href="#" title="Share with X">X</Link>
        </div>
    </div>
  )
}
const SidebarProfile = () => {
  return (
    <div
        className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999">

        <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
            <div className="mx-4 mt-12 text-center user-info lg:mx-6">
                <Link href="index-2.html"
                    className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full *:w-full *:h-full *:rounded-full">
                    <Image src="/img/user-sidebar-thumb.png" className="hidden dark:block " width={133} height={133} alt="Brown Reddick" />
                    <Image src="/img/user-sidebar-thumb-light.png" className="dark:hidden" width={133} height={133} alt="Brown Reddick" />
                </Link>
                <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name uppercase">Le van linh</h6>
                <div className="leading-none cd-headline clip is-full-width">
                    <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme *:font-normal">
                        <b className="is-visible">Web Developer</b>
                    </h6>
                </div>
            </div>
            <div className="px-4 py-5 mt-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
                <div className="text-sm font-medium text-black dark:text-white">Skills</div>
                <div className="flex items-center justify-between flex-wrap my-4 space-x-4 skills_circle *:space-y-2 *:text-center">
                    <div className="progressCircle">
                      <div className="relative w-20 h-20">
                        <svg className="absolute top-0 left-0" width="80" height="80" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            strokeWidth="5"
                            className="text-gray-200"
                            fill="none"
                            stroke="currentColor"
                          />
                        </svg>
                        <svg className="absolute top-0 left-0" width="80" height="80" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            strokeWidth="5"
                            fill="none"
                            className="text-theme"
                            stroke="currentColor"
                            strokeDasharray="280"
                            strokeDashoffset="110"
                            strokeLinecap="round"
                            transform="rotate(-90 40 40)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-theme">
                          80%
                        </div>
                      </div>
                      <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">MERN Stack</p>
                    </div>
                    <div className="progressCircle">
                      <div className="relative w-20 h-20">
                        <svg className="absolute top-0 left-0" width="80" height="80" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            strokeWidth="5"
                            className="text-gray-200"
                            fill="none"
                            stroke="currentColor"
                          />
                        </svg>
                        <svg className="absolute top-0 left-0" width="80" height="80" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            strokeWidth="5"
                            fill="none"
                            className="text-theme"
                            stroke="currentColor"
                            strokeDasharray="220"
                            strokeDashoffset="110"
                            strokeLinecap="round"
                            transform="rotate(-90 40 40)"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-theme">
                          50%
                        </div>
                      </div>
                      <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">English/Japannes</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Link href="mycv.html" download target="_blank"
                        className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover">
                        DOWNLOAD CV
                        <span className="animate-bounce">
                            <svg width="18" height="18" viewBox="0 0 15 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.0724 4.92378C12.0726 4.91034 12.0726 4.89691 12.0726 4.88368C12.0726 2.53968 10.1657 0.632812 7.82171 0.632812C5.47771 0.632812 3.57084 2.53968 3.57084 4.88368C3.57084 4.89691 3.57084 4.91055 3.57104 4.92378C1.95417 5.0992 0.691406 6.47267 0.691406 8.13554C0.691406 9.91704 2.14059 11.3662 3.92209 11.3662H4.33138C4.55606 11.3662 4.7384 11.1839 4.7384 10.9592C4.7384 10.7345 4.55606 10.5522 4.33138 10.5522H3.92209C2.58952 10.5522 1.50544 9.46811 1.50544 8.13554C1.50544 6.80297 2.58952 5.71888 3.92209 5.71888H4.00309C4.11868 5.71888 4.22898 5.66963 4.30611 5.58355C4.38345 5.49726 4.42028 5.38248 4.40766 5.2673C4.3924 5.12769 4.38487 5.00233 4.38487 4.88348C4.38487 2.98842 5.92665 1.44664 7.82171 1.44664C9.71678 1.44664 11.2586 2.98842 11.2586 4.88348C11.2586 5.00233 11.251 5.12769 11.2358 5.2673C11.2231 5.38228 11.26 5.49726 11.3373 5.58355C11.4144 5.66963 11.5247 5.71888 11.6403 5.71888H11.7217C13.0541 5.71888 14.138 6.80297 14.138 8.13554C14.138 9.46811 13.0541 10.5522 11.7217 10.5522H11.288C11.0634 10.5522 10.881 10.7345 10.881 10.9592C10.881 11.1839 11.0634 11.3662 11.288 11.3662H11.7217C13.5028 11.3662 14.952 9.91704 14.952 8.13554C14.952 6.47247 13.6892 5.099 12.0724 4.92378Z"
                                    fill="white" />
                                <path
                                    d="M6.26314 11.942C6.0877 12.1876 6.26327 12.5288 6.5651 12.5288H8.81272L7.3764 14.5396C7.25728 14.7064 7.29591 14.9382 7.46268 15.0573C7.62945 15.1764 7.86122 15.1378 7.98034 14.971L9.83579 12.3734C10.0112 12.1278 9.83566 11.7866 9.53382 11.7866H7.2862L8.72252 9.77578C8.84164 9.609 8.80302 9.37724 8.63624 9.25811C8.46947 9.13899 8.23771 9.17762 8.11858 9.34439L6.26314 11.942Z"
                                    fill="white" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>

            <svg className="absolute w-0 h-0">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox" stroke="white" strokeWidth="2">
                    <path
                        d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031">
                    </path>
                </clipPath>
            </svg>
        </div>

    </div>
  )
}
const BgLines = () => {
  return (
    <div className="bg-lines fixed inset-0 -z-1 md:max-xl:max-w-[45rem] xl:max-w-60rem 2xl:max-w-container mx-auto max-sm:px-8 sm:max-xl:px-12">
        <div className="line-wrapper max-w-[1130px] w-full h-full ml-auto 2xl:-mr-24 relative flex justify-between *:w-px *:h-full *:border-r *:border-dashed *:border-slate-300 dark:*:border-metalBlack *:relative *:before:absolute *:before:bg-theme *:before:rotate-45 *:before:-left-1 *:before:w-2 *:before:h-2">
            <div className="line1 before:animate-top_bottom"></div>
            <div className="line2 before:bottom-0 before:animate-bottom_top before:animate-delay-3s"></div>
            <div className="line3 before:animate-top_bottom before:animate-delay-3s"></div>
            <div className="line4 before:bottom-0 before:animate-bottom_top before:animate-delay-2s"></div>
        </div>
    </div>
  )
}
const Introduction = () => {
  return (
    <div data-scroll-index={0} id="home">
  <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
      <FaHome className="text-theme" />
      INTRODUCE
    </div>
    <div className="items-center gap-6 hero-content md:flex xl:gap-10">
      <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
        <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
          Always focusing on  <br />
          <span className="text-theme">performance, security, and user experience</span>
        </h1>
        <p>
        With a passion for developing modern web applications, 
        I not only master the 
        {" "}<span className="font-medium text-black dark:text-white/90">
        Frontend Developer
        </span>{" "}
        but also expand my skills to the backend with Node.js, Express.js, and MongoDB, Reactjs, Nextjs. 
        Always focusing on performance, security, and user experience,
         I aspire to bring breakthrough technology solutions that are both optimized and scalable.
        </p>
        <ul className="flex items-center mt-4 -mx-3 lg:mt-5 *:flex *:items-center *:mx-3 *:text-regular">
          <li>
            <FaCheckDouble className="mr-2 fal text-theme" />
            Available for work
          </li>
          <li>
            <FaCheckDouble className="mr-2 fal text-theme" />
            Full Time Job
          </li>
        </ul>
        <ul className="mt-7 buttons">
          <li data-scroll-nav={8}>
            <Link
              href="#about"
              className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
            >
              <FaPaperPlane />
              HIRE ME
            </Link>
          </li>
        </ul>
      </div>
      <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
        <Image src="/img/hero-img-1.png" className="dark:hidden" width={325} height={400} alt="Hero Image - Light Mode" />
        <Image src="/img/hero-img-2.png" className="hidden dark:block" width={325} height={400} alt="Hero Image - Dark Mode" />
      </div>
    </div>
  </div>
</div>

  )
}
const About = () => {
  return (
    <div data-scroll-index={1} id="about">
  <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
      <FaUserAlt className="text-theme" />
      ABOUT ME
    </div>
    <div className="mt-7 md:mt-10 section-title">
      <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
        About <span className="font-semibold text-theme">Me</span>
      </h2>
      <p className="max-w-2xl mt-4 md:mt-6 subtitle">
        Hi, my name is{" "}
        <span className="text-black dark:text-white">LE VAN LINH </span> and I
        began using HTML,CSS,Javascript, Bootstrap, Photoshop when first began. spent most of my waking hours
        for the last five years developing frontend websites according to{" "}
        <span className="text-black dark:text-white">w3c standards, themeforest and Japanese cms systems</span> 
      </p>
    </div>
    <div className="mt-6 section-content">
      <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4 *:inline-block *:px-3.5 *:py-2 *:transition *:duration-300 *:border *:border-dashed *:text-black dark:*:text-white/70 *:border-platinum dark:*:border-greyBlack *:rounded-3xl md:*:px-5 md:*:py-2">
        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
          HTML5 &amp; CSS3 (94%)
        </Link>
        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
          Bootstrap (98%)
        </Link>
        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
          TailwindCSS (90%)
        </Link>
      </div>
      <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 *:flex *:items-center">
        <li>
          <span className="flex-[0_0_6rem]">Phone</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-black dark:text-white">0342681138</span>
        </li>
        <li>
          <span className="flex-[0_0_6rem]">Email</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-black dark:text-white">jacklinh79@gmail.com</span>
        </li>
        <li>
          <span className="flex-[0_0_6rem]">Github</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-black dark:text-white">github.com/user</span>
        </li>
        <li>
          <span className="flex-[0_0_6rem]">Language</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-black dark:text-white">
            English, Japan
          </span>
        </li>
      </ul>
      <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
        <li>
          <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
            <span>185</span>+
          </div>
          <div className="text-sm">Years Of Experience</div>
        </li>
        <li>
          <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
            <span>12</span>+
          </div>
          <div className="text-sm">Handled Projects</div>
        </li>
        <li>
          <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
            <span>05</span>+
          </div>
          <div className="text-sm">Open Source Libraries</div>
        </li>
        <li>
          <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
            <span>18</span>
          </div>
          <div className="text-sm">Awards Won</div>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}
const Resume = () => {
  return (
    <div data-scroll-index={2} id="resume">
  <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
      <FaFolderOpen className="text-theme" />
      RESUME
    </div>
    <div className="mb-8 mt-7 md:my-10 section-title">
      <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
        Work <span className="font-semibold text-theme">Experience</span>
      </h2>
      <p className="max-w-xl mt-4 md:mt-6 subtitle">
        I design products that are more than pretty. I make them shippable and
        usable, tempor non mollit dolor et do aute
      </p>
    </div>
    {/*./section-title*/}
    <div className="experience">
      <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
        <li>
          <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
            <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
              Themesflat Technology
            </h6>
            <p className="text-[13px] md:text-sm text-theme">
              2017-2018
            </p>
          </div>
          <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
            <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
            Intership and Developer Front-End
            </h4>
            <p>
            Convert PSD to HTML, CSS, JavaScript, Bootstrap...according to pixel perfect design standards PSD, W3C, clean code and optimize to upload to Themeforest
            </p>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
            <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
            GLOBAL DESIGN IT Co,ltd
            </h6>
            <p className="text-[13px] md:text-sm text-theme">2018 - October 2024</p>
          </div>
          <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
            <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
              Developer Front-End for CMS
            </h4>
            <p>
            Convert PSD to HTML, CSS, JavaScript, Bootstrap...according to pixel perfect design standards PSD, W3C, clean code and optimize.
            Coding Convention For CMS8341 check Accessibility(heading, Color Contrast, font size, source, form ...), Usability(print, off javascript, Keyboard Focus, read voice), Fixed form, Library.
            Using React.JS, Ant Design creates tools to serve the work in the team.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <br />
    <div className="mb-8 mt-7 md:my-10 section-title">
      <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
        My <span className="font-semibold text-theme">Education</span>
      </h2>
      <p className="max-w-xl mt-4 md:mt-6 subtitle">
        I design products that are more than pretty. I make them shippable and
        usable, tempor non mollit dolor et do aute
      </p>
    </div>
    <div className="experience">
      <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
        <li>
          <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
            <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
              Danang University of Technology Education
            </h6>
            <p className="text-[13px] md:text-sm text-theme">2012-2015</p>
          </div>
          <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
            <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
              Bachelor of Management Information Systems
            </h4>
            <p>
            developing, implementing, and managing information systems to support the business operations of organizations. These information systems may include software, hardware configurations, databases, networks, and other devices.
            </p>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
            <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
              Softech Aptech
            </h6>
            <p className="text-[13px] md:text-sm text-theme">2023 - 2024</p>
          </div>
          <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
            <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
              MERN Stack
            </h4>
            <p>
              Build amazing web apps with MongoDB, Express.js, React.js and Node.js
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

const Portfolio = () => {
  return (
    <div data-scroll-index={3} id="portfolio">
  <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
      <FaTasks className="text-theme" />
      PORTFOLIO
    </div>
    <div className="mt-5 mb-8 md:my-10 section-title">
      <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
        Featured <span className="font-semibold text-theme">Projects</span>
      </h2>
      <p className="max-w-xl mt-4 md:mt-6 subtitle">
        I design products that are more than pretty. I make them shippable and
        usable, ttempor non mollit dolor et do aute
      </p>
    </div>
    {/*./section-title*/}
    <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5 *:relative *:z-1">
      <div className="item md:col-span-2 group">
        <Link
          href="project-single.html"
          className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
        >
          <div className="img-wrapper">
            <Image src="/img/portfolio/portfolio-img1.png" className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              alt="portfolio" width={810} height={374}  />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
          </div>
          <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
            Convert PSD To
            <span> Html,css,javascript</span>
          </div>
        </Link>
        <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
          <li>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
            >
              Themeforest
            </Link>
          </li>
        </ul>
      </div>
      {/*./portfolio-card*/}
      <div className="item md:col-span-1 group">
        <Link
          href="project-single.html"
          className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
        >
          <div className="img-wrapper">
            <Image
              src="/img/portfolio/portfolio-img2.png"
              className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              alt="portfolio" width={810} height={374}
            />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
          </div>
          <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
            Convert PSD To
            <span> Html,css,javascript</span>
          </div>
        </Link>
        <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
          <li>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
            >
              CMS
            </Link>
          </li>
        </ul>
      </div>
      {/*./portfolio-card*/}
      <div className="item md:col-span-1 group">
        <Link
          href="project-single.html"
          className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
        >
          <div className="img-wrapper">
            <Image
              src="/img/portfolio/portfolio-img3.png"
              className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              alt="portfolio" width={810} height={374}
            />
            <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
          </div>
          <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
            Nextjs
          </div>
        </Link>
        <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
          <li>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
            >
              MERN Stack
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-10 text-center more-blogs md:mt-13">
      <Link
        href="projects"
        className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
      >
        More Projects
      </Link>
    </div>
  </div>
</div>

  )
}
const Footer = () => {
  return (
    <footer className="mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
      <div className="footer-container text-center py-6 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <p>
          Copyright by &nbsp;
           <Link href="javascript:void(0)" className="transition-colors">
            Le Van Linh
          </Link>
        </p>
      </div>
    </footer>

  )
}

const NavRight = () => {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Cuộn mượt mà
            block: 'start', // Đưa phần tử vào đầu vùng nhìn thấy
        });
    }
  };
  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
  {/* Site Logo Start */}
  <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
    <Link href="index-2.html">
      <Image src="/img/site-logo.svg" width={29} height={29} alt="Minfo" />
    </Link>
  </div>
  {/* Site Logo Start */}
  {/* Main Menu/Navigation Start */}
  <div className="my-4 menu">
    <ul className="space-y-2 text-center *:relative">
      <li data-scroll-nav={0} className="group active">
        <Link
          href="#home" onClick={(e) => scrollToSection(e, 'home')}
          className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
          data-title="Home"
        >
          <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
            <FaHome />
          </span>
        </Link>
      </li>
      <li data-scroll-nav={1} className="group">
        <Link
          href="#about" onClick={(e) => scrollToSection(e, 'about')}
          className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
          data-title="About"
        >
          <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
            <FaUserAlt />
          </span>
        </Link>
      </li>
      <li data-scroll-nav={2} className="group">
        <Link
          href="#resume" onClick={(e) => scrollToSection(e, 'resume')}
          className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
          data-title="Resume"
        >
          <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
            <FaFolderOpen />
          </span>
        </Link>
      </li>
      <li data-scroll-nav="3" className="group">
        <Link
          href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}
          className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
          data-title="Poftfolio"
        >
          <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
            <FaTasks />
          </span>
        </Link>
      </li>
    </ul>
  </div>
  {/* Main Menu/Navigation End */}
  {/* Share Button Wrapper Start */}
  <div className="relative share group">
    <button
      className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
      aria-label="Share"
    >
      <FaShareAlt />
    </button>
    {/* Social Share Icon Start  */}
    <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1 *:flex *:transition *:duration-200">
      <Link href="#" className="hover:text-theme" title="Share with Facebook">
        <FaFacebook />
      </Link>
    </div>
    {/* Social Share Icon End  */}
  </div>
  {/* Share Button Wrapper End */}
</div>

  )
}
export default function Home() {
  return (
    <div className="relative">
        {/* App Start */}
        <div className="relative pt-10 max-xl:pt-20">
          <div
              className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100">
          </div>
          <div className="max-lg:px-4">
            <MobileMenuBar />
            <MobileMenu />
            <SidebarProfile />
            <NavRight />
            <div className="relative mx-auto max-w-container xl:max-2xl:max-w-65rem *:py-5 xl:*:py-3.5 *:max-w-content max-xl:*:mx-auto xl:*:ml-auto xl:max-2xl:*:max-w-50rem">
              <Introduction />
              <About />
              <Resume />
              <Portfolio />
            </div>
            <Footer />
          </div>
        </div>
        {/* App End */}
        {/* start Background Line and Animation */}
        <BgLines />
        {/* end Background Line and Animation */}
       
        <ModeToggle />
    </div>
  );
}
