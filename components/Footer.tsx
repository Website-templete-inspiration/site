import Link from "next/link";
import {SocialMedia} from "../_data/social-media";
import {BsMedium} from "react-icons/bs";
import React from "react";
import {FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiMail, FiTwitter} from "react-icons/fi";
import {SiPackagist} from "react-icons/si";
import {me} from "../_data/user-data";
import {Policy} from "./Policy";

export default function Footer() {
    return (
        <div className=" dark:bg-gray-900">
            <div className="pt-4 pb-2">
                <div className="h-0.5 w-full bg-red-700 dark:bg-gray-700"/>

                <div className="w-full flex flex-col md:flex-row mt-4 mb-6 sm:mb-4 ">
                    <div className="mx-auto sm:mx-0 p-3 sm:p-1">
                        <p className="text-sm">
                            <div
                                className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                                <a className="hover:bg-pink-500 rounded-md px-2 py-1 hover:text-gray-50">&copy; {me.name}</a>
                            </div>
                            <div className="px-4 py-1 text-xs">
                                All Rights Reserved
                            </div>
                        </p>
                    </div>

                    <div className=" flex flex-row flex-grow mx-auto sm:mx-2 space-x-8 p-2 sm:p-0 ">
                        <Policy/>
                    </div>

                    <div className="space-x-4 flex flex-row mx-auto p-6 sm:p-4 ">
                        <div
                            className="inline-block transform hover:scale-110 hover:-rotate-6 transition duration-300">
                            <a href={`mailto:${me.email}`} target="_blank" rel="noreferrer" className="hover:text-red-700 hover:text-gray-50">
                                <FiMail className="font-normal text-[#288780] dark:text-gray-300"/>
                            </a>
                        </div>

                        <Link href={SocialMedia.Linkedin}>
                            <a target="_blank" rel="noreferrer">
                                <FiLinkedin className="font-normal text-[#0A66C2] dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Medium}>
                            <a target="_blank" rel="noreferrer">
                                <BsMedium className="text-base font-normal dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Github}>
                            <a target="_blank" rel="noreferrer">
                                <FiGithub className="text-base font-normal text-gray-900 dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Gitlab}>
                            <a target="_blank" rel="noreferrer">
                                <FiGitlab className="text-base font-normal text-[#554488] dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Packagist}>
                            <a target="_blank" rel="noreferrer">
                                <SiPackagist className="text-base font-normal text-[#f28d1a] dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Instagram}>
                            <a target="_blank" rel="noreferrer">
                                <FiInstagram className="text-base font-normal text-[#E4405F] dark:text-gray-300"/>
                            </a>
                        </Link>

                        <Link href={SocialMedia.Twitter}>
                            <a target="_blank" rel="noreferrer">
                                <FiTwitter className="text-base font-normal text-[#1DA1F2] dark:text-gray-300"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
