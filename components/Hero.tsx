import {Highlight} from "./Highlight";
import {me} from "../_data/user-data";
import React from "react";
import {BsArrow90DegDown, BsArrow90DegUp, BsArrowLeft} from "react-icons/bs";
import {SocialMedia} from "../_data/social-media";
import {GiPartyPopper} from "react-icons/gi";
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-2 pt-2 md:py-14">
            <div className="flex flex-col lg:flex-row items-center my-2">
                <div className="w-full md:w-2/3 text-center lg:text-left p-4">
                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl">
                        Hello Dude, I&apos;m <span className="font-bold">Daniele</span>, the one man show behind the
                        curtain <Highlight color={'#21759B'} type={'box'}> <span className="font-bold">dB
                        Development</span></Highlight>.
                    </h2>

                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl pt-6">
                        I <Highlight color={'#8b9b21'} type={'box'}>code</Highlight>, I <Highlight
                        color={'#249a20'} type={'box'}>teach how to write beautiful code</Highlight> and
                        I <Highlight color={'#6a9b21'} type={'box'}>write articles</Highlight> on <a href={SocialMedia.Medium}>Medium</a> and.
                    </h2>
                </div>
                <div className="w-full md:w-1/3 lg:block items-end p-4   ">
                    <div className="ml-4 hidden lg:block relative w-full ">
                        <img src={me.avatarUrl} alt={me.name} className=" rounded object-right max-h-64 shadow-2xl  "/>
                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-row space-x-4">
                                <BsArrow90DegUp className="animate-bounce"/>
                                <p className="font-mono">This is me</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-4 shadow-xl bg-red dark:bg-gray-800 dark:border-gray-600 pt-4 ">
                <div className="row-span-2 mx-auto pb-6 flex justify-center">
                    <img src="./db-development.svg" alt="logo db-development " className="h-12 w-36 sm:h-36"/>
                </div>
                <div className="row-span-2 col-span-2 ">
                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl pt-5 pb-0">
                        <Highlight color={'#288780'} type={'highlight'}>
                            The right way for the innovation. <br/>
                            We work hard, we work a lot, for a simple and better solution <br/>
                        </Highlight>
                        <Highlight color={'#0c465f'} type={'highlight'}>
                            <span className="text-white">Keep in touch.</span>
                        </Highlight>
                    </h2>
                    <div className="hidden sm:block pt-4 ">
                        <p className="font-mono font-extralight text-sm">
                            <BsArrowLeft className="inline-block animate-ping mr-1 "/> That&apos;s my 10 years
                            company <GiPartyPopper className="inline-block ml-0 "/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
