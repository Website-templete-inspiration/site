import {Post} from "../services/interfaces/Post";
import React from "react";
import {BsEyeglasses} from "react-icons/bs";

const Medium = ({posts}: { posts: Post[] }) => {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-16 sm:h-32 bg-white dark:bg-gray-800">
                <h1 className=" text-2xl md:text-6xl font-bold py-8 sm:py-14 text-center md:text-left">My Articles.</h1>
            </div>
            <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 mb-10">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {posts.map((post, index) =>
                            <>
                                <div
                                    className="relative flex border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 dark:border-gray-600 mx-4 ">
                                    <div className="mr-4 flex-shrink-0 self-center hidden sm:block">
                                        <img src={post.image}
                                             className="w-18 h-18 sm:h-12 md:max-w-24 lg:max-w-48 rounded-none mx-auto border border-gray-300 bg-white"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a href={post.link} target="_blank"  rel="noreferrer" className="text-gray-500">
                                            <h4 className="text-lg font-bold text-gray-500 dark:text-white ">{post.title}</h4>
                                        </a>
                                        <p className="text-xs text-gray-700 dark:text-white mt-1">{post.pubDate}</p>
                                        <div className="mt-2">
                                            {post.tags.map((tag, index) =>
                                                <>
                                                <span
                                                    className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 ml-1 text-right"
                                                >{tag}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex items-center ">
                    <BsEyeglasses className="flex-1 flex text-gray-900 text-xl dark:text-white mt-4 place-content-center content-center items-baseline object-none object-center mb-4"/>
                </div>
            </div>
        </section>
    );
}

export default Medium;