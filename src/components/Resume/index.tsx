import {FaFolderOpen} from "react-icons/fa";

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
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    Freelancer
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">Present</p>
                            </div>
                            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Freelancer web developer
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="mb-8 mt-7 md:my-10 section-title">
                    <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        My <span className="font-semibold text-theme">Education</span>
                    </h2>
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

export default Resume
