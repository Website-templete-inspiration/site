import {GetStaticProps} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Medium from "../components/Medium";
import {getMediumPosts} from "../services/medium";
import {Post} from "../services/interfaces/Post";
import TechStack from "../components/TechStack";
import {NextSeo} from "next-seo";
import {getRepoInfos} from "../services/github";
import {Packagist} from "../services/interfaces/Packagist";
import React from "react";
import Script from 'next/script'


export default function Home({ posts, stats }: { posts: Post[], stats: Packagist }) {
    return (
      <main className="container mx-auto px-4">
          <NextSeo
              title="Daniele Barbaro – dB Development web solution – The right way for the innovation"
              description="Hi, I am Daniele Barbaro and this is my personal website where I share my business experiences."
          />
          <Navbar />
          <Hero stats={stats} />
          <TechStack />
          <Medium posts={posts}/>
          <Footer/>

          <Script src="//cdn.iubenda.com/cs/ccpa/stub.js" />
          <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async />
          <Script src="/iubenda.js" />
      </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getMediumPosts();
    const stats = await getRepoInfos();
    return {
        props: {
            posts,
            stats,
        },
    };
}