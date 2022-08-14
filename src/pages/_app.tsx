import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { ThemeProvider } from "next-themes";
import { Navbar, FloatingBurger } from "@components/inc";
import { LoaderProvider } from "@context";
import React, { useRef, Suspense } from "react";
import useToggle from "@hooks/useToogle";
import dynamic from "next/dynamic";

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
