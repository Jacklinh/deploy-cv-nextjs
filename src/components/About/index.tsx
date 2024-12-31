import Link from "next/link"
import { FaUserAlt,FaNodeJs,FaArrowRight   } from "react-icons/fa";
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
                        for the last six years developing frontend websites according to{" "}
                        <span className="text-black dark:text-white">pixel perfect design standards PSD, W3C, themeforest and Japanese cms systems</span>
                    </p>
                </div>
                <div className="mt-6 section-content">
                    <div className="inline-flex items-center gap-2 px-4 py-2 my-4 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                        <FaNodeJs  className="text-theme" />
                        Skills
                    </div>
                    <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4 *:inline-block *:px-3.5 *:py-2 *:transition *:duration-300 *:border *:border-dashed *:text-black dark:*:text-white/70 *:border-platinum dark:*:border-greyBlack *:rounded-3xl md:*:px-5 md:*:py-2">
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            HTML5 &amp; CSS3
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Bootstrap
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            TailwindCSS
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Photoshop
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Javascript/Jquery
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Github/Sourcetree
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            React
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Ant design/ Shadcn
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Nodejs
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            MongoDB/ Mongoosee
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            ExpressJS
                        </Link>
                        <Link href="javascript:void(0)" className="hover:text-theme dark:hover:text-white">
                            Next.js
                        </Link>
                        <Link
                        href="skills"
                        className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                    >
                        Skills Detail <FaArrowRight />
                    </Link>
                    </div>
                    
                    <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 *:flex *:items-center">
                        <li>
                            <span className="flex-[0_0_6rem]">Date of birth</span>
                            <span className="flex-[0_0_2rem]">:</span>
                            <span className="text-black dark:text-white">05/04/1993</span>
                        </li>
                        <li>
                            <span className="flex-[0_0_6rem]">Address</span>
                            <span className="flex-[0_0_2rem]">:</span>
                            <span className="text-black dark:text-white">884 Nguyễn Lương Bằng, P.Hoà Hiệp Nam, Q.Liên Chiểu, Đà Nẵng</span>
                        </li>
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
                            <span className="flex-[0_0_6rem]">Facebook</span>
                            <span className="flex-[0_0_2rem]">:</span>
                            <span className="text-black dark:text-white"><Link className="text-theme" href='https://www.facebook.com/rinlee138' target="_blank">https://www.facebook.com/rinlee138</Link></span>
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
                                <span>6</span>+
                            </div>
                            <div className="text-sm">Years Of Experience</div>
                        </li>
                        <li>
                            <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>100</span>+
                            </div>
                            <div className="text-sm">Handled Projects</div>
                        </li>
                        <li>
                            <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                                <span>3</span>
                            </div>
                            <div className="text-sm">Awards Won</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About