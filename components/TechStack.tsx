import React from "react";
import Link from "next/link";
import {
    SiNginx,
    SiPhp,
    SiTypescript,
    SiRedis,
    SiMysql,
    SiDrupal,
    SiMongodb,
    SiSymfony,
    SiHugo,
    SiDocker,
    SiHtml5,
    SiTailwindcss,
    SiCss3, SiLaravel, SiReact, SiGnubash, SiNodedotjs, SiVuedotjs,
} from "react-icons/si";
import {BsHeart} from "react-icons/bs";
import { GiNinjaHeroicStance } from "react-icons/gi";

const TechStack = () => {
    return (
        <section className="bg-white dark:bg-gray-800 mb-4 pb-2 pt-2 sm:pb-4 sm:pt-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
                <h1 className=" text-2xl md:text-6xl font-bold mt-8 pb-1 text-center">Tech Stack.</h1>
                <p className=" font-medium text-center p-2 ">We <BsHeart className=" text-red-700 inline-block animate-ping mr-1 " /> and we are Ninja <GiNinjaHeroicStance className="inline-block m-0.5 "  /> of:</p>
            </div>
            <div className="md:max-w-6xl overflow-x-auto mx-auto mb-2 sm:mb-10 ">
                <div className="flex items-center  text-container max-w-6xl mx-auto pt-2 sm:pt-5">
                    <div className="space-x-2 flex-1 flex flex-row items-center p-2">
                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiPhp
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiGnubash
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiTypescript
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiNodedotjs
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiVuedotjs
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiLaravel
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiDrupal
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiSymfony
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiHugo
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiCss3
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiHtml5
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiTailwindcss
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>


                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiRedis
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiMysql
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiMongodb
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiNginx
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer" className="hover:scale-105 ease-in duration-300">
                                <SiDocker
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;