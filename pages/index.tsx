import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/base";
import { Hero, Navbar } from "../components/inc";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero/>
    </>
  );
};

export default Home;
