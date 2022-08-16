import type { NextPage } from "next";
import React, { Suspense } from "react";
import { SWRConfig } from "swr";
import { Blog, Hero, LoadingScreen } from "@components/inc";
import { getArticles, returns } from "@utils";
import { LoaderContext } from "@context";
import dynamic from "next/dynamic";

const Featured = dynamic(() => import("@components/inc/Featured"), {
  suspense: true,
});
const DDoM = dynamic(() => import("@components/inc/DDoM"), { suspense: true });
const NewsLetter = dynamic(() => import("@components/inc/NewsLetter"), {
  suspense: true,
});

const Home: NextPage<{ fallback: returns }> = ({ fallback }) => {
  const Loader = React.useContext(LoaderContext);
  return (
    <SWRConfig value={{ fallback }}>
      <Hero />
      {Loader?.loading && <LoadingScreen />}
      <Blog />
      <Suspense fallback={<div />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<div />}>
        <DDoM />
      </Suspense>
      <Suspense fallback={<div />}>
        <NewsLetter />
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
