import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { ThemeProvider } from "next-themes";
import { Navbar, ThemeButton, FloatingBurger } from "@components/inc";
import { LoaderProvider } from "@context";
import React, { useRef, Suspense } from "react";
import useToggle from "@hooks/useToogle";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("@components/inc/MobileNav"));
const Footer = dynamic(() => import("@components/inc/Footer"));

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
      <Suspense fallback={<div />}>
        <LoaderProvider value={{ loading }}>
          <FloatingBurger {...{ navOpened, setNavOpened }} />
          <Navbar />
          <MobileNav {...{ navOpened, setNavOpened }} />
          <ThemeButton />
          <Component {...pageProps} />
          <Footer />
        </LoaderProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default MyApp;
