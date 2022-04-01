import {Highlight} from "./Highlight";
import {me} from "../_data/user-data";
import React from "react";
import {BsArrow90DegUp, BsArrowUp} from "react-icons/bs";
import {SocialMedia} from "../_data/social-media";
import Image from 'next/image'
import {Packagist} from "../services/interfaces/Packagist";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

export default function Hero({stats}: { stats: Packagist }) {
    return (
        <div className="max-w-6xl mx-auto px-2 py-10 md:py-12">
            <div className="flex flex-col lg:flex-row items-center my-2 pt-4">
                <div className="w-full md:w-2/3 text-center lg:text-left p-4">
                    <h2 className="font-normal text-xl lg:text-xl max-w-2xl">
                        Hey Dude, I&apos;m <span className="font-bold">Daniele</span>, the one-man show behind the
                        curtain of <br/> <Highlight color={'#21759B'} type={'highlight'}> <span
                        className="font-bold text-white">dB
                        Development</span></Highlight>.
                    </h2>

                    <h2 className="font-normal text-xl lg:text-xl max-w-2xl pt-3">
                        I <Highlight color={'#8b9b21'} type={'box'}>code</Highlight>, I <Highlight
                        color={'#249a20'} type={'box'}>teach how to write beautiful code</Highlight> and
                        I <Highlight color={'#6a9b21'} type={'box'}>write articles</Highlight> on <a
                        href={SocialMedia.Medium} target="_blank" rel="noreferrer" className="font-semibold">Medium</a>.
                    </h2>

                    <h2 className="font-normal text-xl lg:text-xl max-w-2xl pt-6">
                        I love the backend, I am a Ninja PHP developer and <a href="https://laravel.com" target="_blank"
                                                                              rel="noreferrer"
                                                                              className="font-semibold text-[#f55247]"> Laravel</a> enthusiast.
                        I use a lot of open source software so I&apos;m an opensource contributor.
                        <br/> One of my Laravel Package today has reach <a href={stats.package.repository}
                                                                           target="_blank" rel="noreferrer"
                                                                           className="font-semibold">{stats.package.downloads.total}</a> downloads
                        so far.
                        <br/> Well, yes also <a href="https://nestjs.com" target="_blank" rel="noreferrer"
                                                className=" font-semibold text-red-500">NestJs</a> is my friend.
                    </h2>
                </div>
                <div className="w-full md:w-1/3 lg:block items-end p-4   ">
                    <div className="ml-4 hidden lg:block relative w-full ">
                        <Image
                            priority={true}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                            src={me.avatarUrl}
                            alt={me.name}
                            height={256}
                            width={256}
                            layout="responsive"
                            className=" rounded object-right max-h-64 shadow-2xl"/>
                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-row space-x-4">
                                <BsArrow90DegUp className="animate-bounce"/>
                                <p className="font-mono">This is me from <span
                                    className="text-gray-400">{me.address}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row shadow-xl dark:bg-gray-800 dark:border-gray-600 p-4">
                <div className="flex flex-row mx-auto pb-6 justify-center">
                    <div className="object-none object-center inline-grid">
                        <Image
                            priority={true}
                            src="/db-development.svg"
                            height="145"
                            width="145"
                            alt="logo db-development "
                            className="h-24 w-36 sm:h-36 "/>
                        <p className="font-mono font-extralight text-xs hidden sm:block text-center">
                            <BsArrowUp
                                className="animate-ping mr-1 hidden lg:inline-block xl:inline-block "/> That&apos;s my
                            10 years
                            company
                        </p>
                    </div>
                </div>
                <div className="flex flex-row  ">
                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl pt-1 sm:pt-5 content-center sm:content-start">
                        <Highlight color={'#288780'} type={'highlight'}>
                            The right way for the innovation. <br/>
                            We work hard, we work a lot, for a simple and better solution <br/>
                        </Highlight>
                        <Highlight color={'#0c465f'} type={'highlight'}>
                            <a href={`mailto:${me.email}`} target="_blank" rel="noreferrer">
                                <span className="text-white">Keep in touch.</span>
                            </a>
                        </Highlight>
                    </h2>

                </div>
            </div>
        </div>
    );
}
