import type { NextPage } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";
import { Experience,Blog, Featured, Hero, NewsLetter, Tools, DDoM } from "../components/inc";
import { getArticles, returns } from "../components/utils/";

const Home: NextPage<{fallback:returns}> = ({fallback}) => {
  return (
     <SWRConfig value={{ fallback }}>

    <>
      <Hero/>
      <Blog/>
      <Featured/>
      <DDoM/>
      {/* TODO: Add Daily dose of motivation*/}
      <NewsLetter/>
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
