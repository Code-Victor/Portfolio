import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { ThemeProvider } from "next-themes";
import { Navbar, FloatingBurger } from "@components/inc";
import { LoaderProvider } from "@context";
import React, { useRef, Suspense } from "react";
import useToggle from "@hooks/useToogle";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/highlight.css"

const MobileNav = dynamic(() => import("@components/inc/MobileNav"));
const Footer = dynamic(() => import("@components/inc/Footer"));
const ThemeButton = dynamic(() => import("@components/inc/ThemeButton"));

function MyApp({ Component, pageProps }: AppProps) {
  const render = useRef(true);
  const [loading, setLoading] = React.useState(true);
  const [navOpened, setNavOpened] = useToggle(false);
  React.useEffect(() => {
    if (render.current) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);
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
