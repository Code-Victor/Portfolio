import type { AppProps } from "next/app";
import { darkTheme } from "@stitchesConfig";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "../components/inc";
import { LoaderProvider } from "@context";
import React, { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const render = useRef(true);
  const [loading, setLoading] = React.useState(true);
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
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default MyApp;
