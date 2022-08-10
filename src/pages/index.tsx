import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { SWRConfig } from "swr";
import {
  Experience,
  Blog,
  Featured,
  Hero,
  NewsLetter,
  Tools,
  DDoM,

  LoadingScreen,
  ThemeButton,
} from "@components/inc";
import { getArticles, returns } from "@utils";
import { LoaderContext } from "@context";

const Home: NextPage<{ fallback: returns }> = ({ fallback }) => {
  const Loader = React.useContext(LoaderContext);
  return (
    <SWRConfig value={{ fallback }}>
      <>

      {/* <LoadingScreen/> */}
        <Hero />
        {Loader?.loading && <LoadingScreen />}
        <Blog />
        <Featured />
        <DDoM />
        <NewsLetter />
        <ThemeButton/>
      </>
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
