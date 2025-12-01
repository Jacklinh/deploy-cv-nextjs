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
                                    Techkids Academy
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">
                                    2025 - Present
                                </p>
                            </div>
                            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Office Informatics & Scratch Teacher - Remote
                                </h4>
                                <p>
                                    - Teaching office informatics (Microsoft Word, Excel, PowerPoint) to students according to the center's program.<br />
                                    - Teaching Scratch programming to elementary school students, making simple game projects, animations, simulations.<br />
                                    - Monitor students' learning progress, evaluate students' abilities and report to parents/centers. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    SMO Technology Company Limited
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">
                                    2025 - Present
                                </p>
                            </div>
                            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Remote Frontend Developer (Vue.js & Laravel)
                                </h4>
                                <p>
                                    - Convert Figma design into pixel perfect web interface, clear code and responsive.<br />
                                    - Optimize UI/UX, responsive and ensure interface performance. <br />
                                    - Optimize front-end performance, ensure page loading speed, caching, lazy loading, code splitting. <br />
                                    - Participate in code review and contribute ideas to improve the product. <br />
                                    - Coordinate with QC in testing & fixing errors. <br />
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    GLOBAL DESIGN IT Co,ltd
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">2018 - 2024</p>
                            </div>
                            <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Front-End Developer for CMS (most recent position Senior)
                                </h4>
                                <p>
                                    - Take the task from the leader and convert PSD design into pixel perfect web interface, clear code, W3C standard and responsive.<br />
                                    - Test Accessibility (heading, color contrast) and Usability (print, no javascript, keyboard focus, read voice).<br />
                                    - Test the product on multiple browsers and real devices (iPhone, Android, Tablet).<br />
                                    - Upload and test the sample on CMS8341 system (Coding and review member on processing fixed form, library according to spec coding cms required), ensure working as required before handing over to BrSE.<br />
                                    - Support the team leader in code review and participate in handling complex backlogs when needed.
                                </p>
                            </div>
                        </li>
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
