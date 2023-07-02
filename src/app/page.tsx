import Head from "next/head";
import Hero from "@/components/Hero";
import Header from "../components/Header";
import type { NextPage } from "next";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Pratham's portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
};
export default Home;
