import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-scroll z-0"
    >
      <Head>
        <title>Srijan's Portfolio</title>
        <meta name="title" content="Srijan's Portfolio" />
        <meta
          name="description"
          content="I am a CSE grad from FIEM, West Bengal, India, batch of 2022. I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.I have built many projects on AI-ML.This website shows my contact details, past experience along with some of the projects that I have worked on."
        />
      </Head>

      <section id="hero" className="snap-center">
        <Header />
      </section>

      <Hero />

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Project */}

      {/* Contact */}
    </div>
  );
};

export default Home;
