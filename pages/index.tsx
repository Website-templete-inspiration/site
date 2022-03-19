import {GetStaticProps} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Medium from "../components/Medium";
import {getMediumPosts} from "../services/medium";
import {Post} from "../services/interfaces/Post";
import TechStack from "../components/TechStack";

export default function Home({ posts }: { posts: Post[] }) {
    return (
      <div className="container mx-auto px-4">
          <Navbar />
          <Hero />
          <TechStack />
          <Medium posts={posts}/>
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