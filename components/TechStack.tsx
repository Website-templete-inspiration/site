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

const TechStack = () => {
    return (
        <section className="bg-white dark:bg-gray-800 mb-4 pb-2 pt-2 sm:pb-4 sm:pt-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
                <h1 className=" text-2xl md:text-6xl font-bold mt-8 pb-1 text-center">Tech Stack.</h1>
                <p className=" font-medium text-center p-2 ">We <BsHeart className=" text-red-700 inline-block animate-ping mr-1 " /> and we are Ninja of:</p>
            </div>
            <div className="md:max-w-6xl overflow-x-auto mx-auto mb-10 ">
                <div className="flex items-center  text-container max-w-6xl mx-auto pt-5">
                    <div className="space-x-2 flex-1 flex flex-row items-center">
                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiPhp
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiGnubash
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiTypescript
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiNodedotjs
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiVuedotjs
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiLaravel
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiDrupal
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiSymfony
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiHugo
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiCss3
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiHtml5
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiTailwindcss
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>


                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiRedis
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiMysql
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiMongodb
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiNginx
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank" rel="noreferrer">
                                <SiDocker
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;