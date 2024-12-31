
import { FaNodeJs,FaCheckCircle   } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const Skills = () => {
    return (
        <div id="skills">
            <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <FaNodeJs className="text-theme" />
                    Skill Details
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
                        <span className="text-black dark:text-white">pixel perfect design standards PSD, W3C, themeforest and Japanese cms systems</span>
                    </p>
                </div>
                <div className="mt-6 section-content">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />HTML5 &amp; CSS3</p></AccordionTrigger>
                        <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Introduction to the Web and HTML5</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Attributes,HTML entities</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Formatting-Text-Using-Tags</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Creating-Hyperlinks-and-Anchors</li>

                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Introduction to CSS3</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Formatting Using Style Sheets(font, CSS Box Model, Horizontal Alignment, Vertical Alignment, Display Property, Position...)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Displaying-Graphics-and-CSS3-Animation</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Understanting-layout-in-Css3(Flexbox,Grid) </li>

                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />HTML Layout, Forms, and Elements </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />HTML5 Tables, Audio, and Video </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Building a Mobile Web Application</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />Javascript, Framework Jquery</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Introduction to JavaScript</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />JavaScript Operators and Statements</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />JavaScript Loops and Array</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />JavaScript Functions</li>

                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />JavaScript Objects</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Destructuring</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />DOM Manipulation</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Event Handling</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Asynchronous JavaScript (Callback, Promises, Async/Await)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Effect và Animation</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />AJAX với jQuery</li>


                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Canvas and JavaScript</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Cookies</li>

                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />HTML5 Web Storage(localStorage, sessionStorage)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Indexed Database API</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />HTML5 Geolocation and APIs</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" /> Framework Bootstrap </p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Grid System(container, row, col...)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Utility Classes(margin, padding, align, block, flex ...)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Components</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Responsive Design</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Customization</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" /> Framework Tailwind CSS </p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Utility Classes(Layout, Sizing, Spacing...)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Styling</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Responsive Design</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Pseudo-classes</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Configuration</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" /> Photoshop</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Understanding Responsive Web Design </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Tool Basic(Move Tool, Marquee Tool, Slice Tool, Text Tool ...) </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Layer</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Import,export file psd, png, jpg ...</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Color and Gradient, Typography</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Adobe XD or Figma</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />Framework JavaScript - React</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Javascript ES6</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />TypeScript Basic</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />JSX, Components</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Props and Styles Component</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Higher Order Component(HOC)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Rendering </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Event Handing and State, Component Lifecycle</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Form(React hook form, Yup validation, Formik)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Hooks(useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />customHook</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Simple CRUD (HTTP Request,  HTTP Response, API...)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Fetch API(use axios,ReactQuery,AntDesign ) </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />React Router</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />State Global (use Zustand, useContext + useReducer, Redux, Redux Toolkit, Redux Saga)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Building web for github or Vercel</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />Web, RESTful API with Expressjs, NoSql with MongoDB (Mongoose)</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Basics of Nodejs(Event Loop, Blocking, Non-blocking)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Node Modules(Http Module, File Module, URL Module, Path Module)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Event và EventEmitter</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Basic ExpressJs Framework</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Route và HTTP Methods</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Route paths</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Requests and Handling Parameters</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Response methods</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Serving static file </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Template Engine</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Callback and Error-First Pattern</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Promises and Async/Await</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Building RESTFul-APIs architecture</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Error handling(use http-errors)</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Middleware</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Logging Requests </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Create Routes, Controllers, Services and Handle Errors inside routes, controllers, services</li>

                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />NoSql với MongoDB (Mongoosee) </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Create database & collections </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Data Schematypes </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Data Model</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Data Validators</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Insert, Update, Delete, and Query documents</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Projection, limit records, skip records, sort records, indexing, aggregation</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Middleware(use Compression, Morgan, Cors, Helmet) and Authentication</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Validate Requests(use joi,yup )</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> JWT Token and Basic Authentication Systems</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> upload files(use Multer) and NodeMailer </li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> upload files</li>
                                <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Deploy web project to Vercel</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />Framework React-  Next.js</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Server-Side Rendering (SSR)</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Static Site Generation (SSG)</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Client-Side Rendering (CSR)</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />Routing (File-based Routing, Dynamic Routes, API Routes)</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Data Fetching(getStaticProps (SSG - Static Site Generation), getServerSideProps (SSR - Server-Side Rendering), Client-Side Fetching)</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Static Site Generation (SSG) với getStaticPaths</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Image Optimization</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> SEO với Head Component</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Middleware và Redirects</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> CSS for nextjs</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> API Routes</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                    <AccordionTrigger><p className="skill-title text-theme font-bold text-xl"><CiBookmarkCheck className="mr-4" />Orther</p></AccordionTrigger>
                    <AccordionContent>
                            <ul className="skill-list">
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Github, Gitlab</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Sourcetree</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> Ant Design of React</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" />React-icons</li>
                            <li className="py-2 text-lg"><FaCheckCircle className="text-red-300 mr-4" /> ui shadcn</li>
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Skills