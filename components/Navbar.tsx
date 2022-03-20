import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import {me} from "../_data/user-data";
import {SocialMedia} from "../_data/social-media";
import {
    BsFillMoonStarsFill,
    BsFillSunFill,
    BsMedium,
} from "react-icons/bs";
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";
import {Highlight} from "./Highlight";

export default function Navbar() {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-2 pt-4 md:py-14 pb-10">
            <div className="flex md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link href="/">
                        <a>
                            <Highlight color={'#ffd54f'} type={'highlight'}>
                                <h1 className="font-semibold text-xl dark:text-black ">
                                    {me.name}
                                </h1>
                            </Highlight>
                            <p className="text-base font-light text-gray-500 dark:text-white">
                                {me.who}
                            </p>
                        </a>
                    </Link>
                </div>

                <div className="space-x-8 hidden md:block">

                </div>

                <div className="space-x-4 flex flex-row items-center">

                    <Link href={SocialMedia.Linkedin}>
                        <a target="_blank" rel="noreferrer">
                            <FiLinkedin className="text-base text-[#0A66C2] font-normal dark:text-gray-300"/>
                        </a>
                    </Link>

                    <Link href={SocialMedia.Medium}>
                        <a target="_blank" rel="noreferrer">
                            <BsMedium className="text-base font-normal  dark:text-gray-300"/>
                        </a>
                    </Link>

                    <Link href={SocialMedia.Github}>
                        <a target="_blank" rel="noreferrer">
                            <FiGithub className="text-base font-normal text-gray-900 dark:text-gray-300"/>
                        </a>
                    </Link>

                    <button
                        aria-label="Dark Mode"
                        type="button"
                        className="w-10 h-10 p-3 rounded focus:outline-none"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {mounted && (
                            <>
                                {theme === "dark" ? (
                                    <BsFillSunFill fill="currentColor" stroke="currentColor"
                                                   className="w-4 h-4 text-yellow-500 dark:text-[#0ea5e9]"/>
                                ) : (
                                    <BsFillMoonStarsFill fill="currentColor" stroke="currentColor"
                                                         className="w-4 h-4 text-yellow-500 dark:text-yellow-500"/>
                                )}
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}