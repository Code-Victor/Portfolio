import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { ThemeProvider } from "next-themes";
import {
  Navbar,
  Footer,
  MobileNav,
  ThemeButton,
  FloatingBurger,
} from "../components/inc";
import { LoaderProvider } from "@context";
import React, { useRef } from "react";
import useToggle from "@hooks/useToogle";

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
        <MobileNav {...{ navOpened, setNavOpened }} />
        <ThemeButton />
        <Component {...pageProps} />
        <Footer />
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default MyApp;
