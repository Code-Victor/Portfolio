import React, { useRef, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import * as figlet from "figlet";
import poison from "@components/base/Poison";
import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { Navbar, FloatingBurger } from "@components/inc";
import { LoaderProvider } from "@context";
import useToggle from "@hooks/useToogle";
import dynamic from "next/dynamic";
import "../styles/highlight.css";

const MobileNav = dynamic(() => import("@components/inc/MobileNav"));
const Footer = dynamic(() => import("@components/inc/Footer"));
const ThemeButton = dynamic(() => import("@components/inc/ThemeButton"));
const LOADING_DURATION = 3500;

function MyApp({ Component, pageProps }: AppProps) {
  const render = useRef(true);
  const [loading, setLoading] = React.useState(true);
  const [navOpened, setNavOpened] = useToggle(false);

  React.useEffect(() => {
    // Easter Egg
    figlet.parseFont("Poison", poison);
    figlet.text(
      "hello Dear,",
      {
        font: "Poison",
        width: 60,
      },
      (err, data) => {
        if (err) {
          console.error(err);
          return false;
        }

        console.log(
          data,
          `\n seeing that you curious about how this project what built, \n you can check the source code on github \n https://github.com/Code-Victor/Portfolio \n and read about how I built it on medium  \n https://medium.com/@oluwaborihamzat`
        );
      }
    );
    if (render.current) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, LOADING_DURATION);
      return () => clearTimeout(timer);
    }
    render.current = false;
  }, []);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <LoaderProvider value={{ loading }}>
        <Head>
          <title>Hamzat Victor | Fronted Developer, Writter</title>
          <meta
            name="description"
            content="Passionate Front-end engineer with react. Change the world one line of code at a time. Enjoy building accessible web interfaces while not leaving out visual consistency with the help of design systems."
          />
        </Head>
        <FloatingBurger {...{ navOpened, setNavOpened }} />
        <Navbar />
        <Component {...pageProps} />
        <Suspense fallback={<div />}>
          <MobileNav {...{ navOpened, setNavOpened }} />
        </Suspense>
        <Suspense fallback={<div />}>
          <ThemeButton />
        </Suspense>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default MyApp;
