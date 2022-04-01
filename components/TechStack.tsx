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
    SiCss3, SiLaravel, SiReact, SiGnubash, SiNodedotjs, SiVuedotjs, SiNextdotjs,
} from "react-icons/si";
import {BsHeart, BsHeartFill} from "react-icons/bs";
import {GiNinjaHeroicStance} from "react-icons/gi";

const TechStack = () => {
    return (
        <section className="bg-white dark:bg-gray-800 mb-4 pb-2 pt-2 sm:pb-4 sm:pt-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800">
                <h1 className=" text-2xl md:text-6xl font-bold mt-8 pb-1 text-center">Tech Stack.</h1>
                <p className=" font-medium text-center p-2 ">I <BsHeartFill
                    className="font-semibold text-red-700 inline-block animate-ping mr-1 ml-1 "/> and I&apos;m a
                    Ninja <GiNinjaHeroicStance className="inline-block m-0.5 "/> of:</p>
            </div>
            <div className="md:max-w-6xl overflow-x-auto mx-auto mb-2 sm:mb-10 ">
                <div className="flex items-center  text-container max-w-6xl mx-auto pt-2 sm:pt-5">
                    <div className="space-x-2 flex-1 flex flex-row items-center p-2">
                            <span aria-label="Php" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiPhp
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Gnu bash" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiGnubash
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Typescript" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiTypescript
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Node.js" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiNodedotjs
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Vue.js" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiVuedotjs
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Laravel" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiLaravel
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Drupal" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiDrupal
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Symfony" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiSymfony
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Hugo" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiHugo
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Css3" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiCss3
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Html5" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiHtml5
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Tailwindcss" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiTailwindcss
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Next.js" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiNextdotjs
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Redis" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiRedis
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Mysql" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiMysql
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Mongodb" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiMongodb
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Nginx" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiNginx
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>

                            <span aria-label="Docker" className="hover:scale-110 ease-in duration-200" role="img">
                                <SiDocker
                                    className="h-10 w-10 sm:h-14 sm:w-14 text-base font-bold text-gray-300 font-normal dark:text-gray-300"/>
                            </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;