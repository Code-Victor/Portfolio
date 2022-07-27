import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/base";
import { Experience, Featured, Hero, Navbar, NewsLetter, Tools } from "../components/inc";

const Home: NextPage = () => {
  return (
    <>
      <Hero/>
      <Experience/>
      <Tools/>
      <Featured/>
      {/* TODO: Add Featured articles */}
      <NewsLetter/>
    </>
  );
};

export default Home;
