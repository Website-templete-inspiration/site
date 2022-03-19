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
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
                <h1 className=" text-2xl md:text-6xl font-bold mt-8 pb-1 text-center">Tech Stack.</h1>
                <p className=" font-medium text-center p-2 ">We <BsHeart className=" text-red-700 inline-block animate-ping mr-1 " /> and we are Ninja of:</p>
            </div>
            <div className="max-w-6xl mx-auto dark:bg-gray-900 mb-10 ">
                <div className="flex items-center  text-container max-w-6xl mx-auto pt-5">
                    <div className="space-x-2 flex-1 flex flex-row items-center">
                        <Link href="#">
                            <a target="_blank">
                                <SiPhp
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiGnubash
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiTypescript
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiNodedotjs
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiVuedotjs
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiLaravel
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiDrupal
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiSymfony
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiHugo
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiCss3
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiHtml5
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiTailwindcss
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>


                        <Link href="#">
                            <a target="_blank">
                                <SiRedis
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiMysql
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiMongodb
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
                                <SiNginx
                                    className="h-14 w-14 ease-out hover:ease-in duration-100 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href="#">
                            <a target="_blank">
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