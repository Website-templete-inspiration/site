import Head from 'next/head'
import Image from 'next/image'
import Medium from "../components/Medium";
import {GetStaticProps} from "next";
import {getMediumPosts} from "../services/medium";
import Navbar from "../components/Navbar";
import {Post} from "../services/interfaces/Post";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home({ posts }: { posts: Post[] }) {
    return (
      <div className="container mx-auto px-4">
          <Navbar />
          <Hero />
          <Footer/>
      </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getMediumPosts();
    return {
        props: {
            posts,
        },
    };
}