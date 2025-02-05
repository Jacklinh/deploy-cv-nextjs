import Link from "next/link";
import Image from "next/image";
import { FaHome, FaPaperPlane, FaCheckDouble } from "react-icons/fa";
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
                                Frontend Developer for 5 years
                            </span>{" "}
                            but also expand my skills to the backend for 1 year with Node.js, Express.js, and MongoDB, Reactjs, Nextjs.
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
                        <Image src="/img/intro.png" className="img-clip-path" width={500} height={500} alt="intro linh" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction