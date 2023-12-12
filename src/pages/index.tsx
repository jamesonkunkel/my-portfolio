import Head from "next/head";
import { Inter } from "next/font/google";

//import components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jameson's Portfolio</title>
        <meta name="description" content="Jameson's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </div>
    </>
  );
}
