import Link from "next/link";
import {SocialMedia} from "../_data/social-media";
import {BsMedium} from "react-icons/bs";
import React from "react";
import {FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";
import {SiPackagist} from "react-icons/si";
import {me} from "../_data/user-data";

export default function Footer() {
  return (
    <div className=" dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-2 pt-4 pb-2">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"/>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between sm:items-center mt-6">
          <div className="flex sm:items-center sm:text-center ">
            <p className="text-sm">
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a className="hover:bg-pink-500 rounded-md px-2 py-1 hover:text-gray-50">&copy; {me.name}</a>
              </div>
              <div className="px-4 py-1 text-xs">
                All Rights Reserved
              </div>
            </p>
          </div>

          <div className="space-x-4 flex flex-row items-center">
            <Link href={SocialMedia.Linkedin}>
              <a target="_blank" rel="noreferrer">
                <FiLinkedin className="text-[#0A66C2] font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Medium}>
              <a target="_blank" rel="noreferrer">
                <BsMedium className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Github}>
              <a target="_blank" rel="noreferrer">
                <FiGithub className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Gitlab}>
              <a target="_blank" rel="noreferrer">
                <FiGitlab className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Packagist}>
              <a target="_blank" rel="noreferrer">
                <SiPackagist className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Instagram}>
              <a target="_blank" rel="noreferrer">
                <FiInstagram className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>

            <Link href={SocialMedia.Twitter}>
              <a target="_blank" rel="noreferrer">
                <FiTwitter className="text-base font-normal text-gray-600 dark:text-gray-300"/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
