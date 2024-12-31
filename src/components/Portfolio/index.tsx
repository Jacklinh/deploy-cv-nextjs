"use client"
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { FaTasks, FaFolderOpen } from "react-icons/fa";
import Loading from "@/components/Loading";

const Portfolio = () => {
    const [visibleItems, setVisibleItems] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerLoad = 3;

    const items = [
        {
            link: "https://preview.themeforest.net/item/autora-construction-business-html-template/full_screen_preview/22224839?_ga=2.151136633.150999425.1734962553-176453124.1716116034",
            image: "/img/portfolio/portfolio1.png",
            alt: "autora",
            title: "Front-end",
            category: "Themeforest"
        },
        {
            link: "https://www.pref.yamanashi.jp/",
            image: "/img/portfolio/portfolio2.png",
            alt: "yamanashi",
            title: "Front-end",
            category: "CMS"
        },
        {
            link: "https://deploy-rinshop-admin.vercel.app/login",
            image: "/img/portfolio/portfolio3.png",
            alt: "portfolio",
            title: "Dashboard",
            category: "MERN Stack"
        },
        {
            link: "https://www.city.kashiwa.lg.jp/index.html",
            image: "/img/portfolio/portfolio4.png",
            alt: "kashiwa",
            title: "Front-end",
            category: "CMS"
        },
        {
            link: "https://www.city.adachi.tokyo.jp/",
            image: "/img/portfolio/portfolio5.png",
            alt: "adachi",
            title: "Front-end",
            category: "CMS"
        },
        {
            link: "https://www.pref.tochigi.lg.jp/",
            image: "/img/portfolio/portfolio6.png",
            alt: "tochigi",
            title: "Front-end",
            category: "CMS"
        },
        {
            link: "https://www.pref.kagawa.lg.jp/index.html",
            image: "/img/portfolio/portfolio7.png",
            alt: "kagawa",
            title: "Front-end",
            category: "CMS"
        },
        {
            link: "https://www.city.arakawa.tokyo.jp/",
            image: "/img/portfolio/portfolio8.png",
            alt: "arakawa",
            title: "Front-end",
            category: "CMS"
        }
        ,
        {
            link: "https://www.city.yokosuka.kanagawa.jp/top.html",
            image: "/img/portfolio/portfolio9.png",
            alt: "tokosuka",
            title: "Front-end",
            category: "CMS"
        }
        ,
        {
            link: "https://www.city.minato.tokyo.jp/",
            image: "/img/portfolio/portfolio10.png",
            alt: "minato",
            title: "Front-end",
            category: "CMS"
        }
        
    ];

    const totalItems = items.length;
    const showLoadMore = visibleItems < totalItems;

    const handleLoadMore = async () => {
        setIsLoading(true);
        // Giả lập loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVisibleItems(prev => Math.min(prev + itemsPerLoad, totalItems));
        setIsLoading(false);
    };

    return (
        <div id="portfolio">
            <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <FaTasks className="text-theme" />
                    PORTFOLIO
                </div>
                <div className="mt-5 mb-8 md:my-10 section-title">
                    <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        Featured <span className="font-semibold text-theme">Projects</span>
                    </h2>
                </div>
                {/*./section-title*/}
                <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5 *:relative *:z-1">
                    {items.slice(0, visibleItems).map((item, index) => (
                        <div key={index} className="item md:col-span-1 group">
                            <Link
                                target="_blank"
                                href={item.link}
                                className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                            >
                                <div className="img-wrapper">
                                    <Image
                                        src={item.image}
                                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                                        alt={item.alt}
                                        width={810}
                                        height={374}
                                    />
                                    <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                                </div>
                                <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                                    {item.title}
                                </div>
                            </Link>
                            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                                <li>
                                    <span
                                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                                    >
                                        {item.category}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                {showLoadMore && (
                    <div className="flex justify-center mt-10">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all rounded-full bg-theme hover:bg-black dark:hover:bg-white dark:hover:text-black"
                                disabled={isLoading}
                            >
                                <FaFolderOpen />
                                Load More Project
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio