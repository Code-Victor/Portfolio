import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/base";
import { Experience,Blog, Featured, Hero, NewsLetter, Tools } from "../components/inc";

const Home: NextPage = () => {
  return (
    <>
      <Hero/>
      <Experience/>
      <Tools/>
      <Featured/>
      <Blog/>
      {/* TODO: Add Featured articles */}
      <NewsLetter/>
    </>
  );
};

export default Home;
