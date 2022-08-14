import type { NextPage } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
import { SWRConfig } from "swr";
import {
  Blog,
  Hero,
  LoadingScreen,
  ThemeButton,
} from "@components/inc";
import { getArticles, returns } from "@utils";
import { LoaderContext } from "@context";
import dynamic from "next/dynamic";

const Featured = dynamic(() => import("@components/inc/Featured"));
const DDoM = dynamic(() => import("@components/inc/DDoM"));
const NewsLetter = dynamic(() => import("@components/inc/NewsLetter"));

const Home: NextPage<{ fallback: returns }> = ({ fallback }) => {
  const Loader = React.useContext(LoaderContext);
  return (
    <SWRConfig value={{ fallback }}>
      <Suspense fallback={<div />}>
        {/* <LoadingScreen/> */}
        <Head>
          <title>Hamzat Victor | Fronted Developer, Writter</title>
          
        </Head>
        <Hero />
        {Loader?.loading && <LoadingScreen />}
        <Blog />
        <Featured />
        <DDoM />
        <NewsLetter />
        <ThemeButton />
      </Suspense>
    </SWRConfig>
  );
};

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const article = await getArticles<returns>();
  return {
    props: {
      fallback: {
        "/api/article": article,
      },
    },
  };
}
export default Home;
