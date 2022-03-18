import {Highlight} from "./Highlight";
import {me} from "../_data/user-data";
import React from "react";
import {BsArrow90DegUp} from "react-icons/bs";
import {SocialMedia} from "../_data/social-media";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-2 pt-4 md:py-14">
            <div className="flex flex-col lg:flex-row items-center my-2">
                <div className="w-full md:w-2/3 text-center lg:text-left p-4">
                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl">
                        Hello Dude, I'm <span className="font-bold">Daniele</span>, the one man show behind <Highlight color={'#21759B'} type={'box'}> <span className="font-bold">dB
                        Development</span></Highlight>.
                    </h2>

                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl pt-8">
                        I <Highlight color={'#8b9b21'} type={'box'}>code</Highlight>, I <Highlight color={'#6a9b21'} type={'box'}>write
                        articles</Highlight> on <a href={SocialMedia.Medium}>Medium</a> and I <Highlight
                        color={'#249a20'} type={'box'}>teach how to write beautiful code</Highlight>.
                    </h2>

                    <h2 className="font-normal text-xl lg:text-2xl max-w-3xl pt-10">
                        Born in '84, workaholic, engineer, clean code addicted. Always engaged in an endless battle to
                        conquer the world...
                    </h2>
                </div>
                <div className="w-full md:w-1/3 lg:block items-end p-4   ">
                    <div className="ml-4 hidden lg:block relative w-full ">
                        <img src={me.avatarUrl} alt="avatar" className="object-right max-h-72 shadow-2xl  "/>
                        <div className="flex flex-row justify-between mt-4">
                            <div className="flex flex-row space-x-4">
                                <BsArrow90DegUp className="animate-bounce"/>
                                <p className="font-mono">That's the man</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
