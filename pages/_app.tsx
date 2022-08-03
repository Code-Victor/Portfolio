import type { AppProps } from 'next/app'
import { darkTheme } from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { Navbar,Footer } from '../components/inc';


function MyApp({ Component, pageProps }: AppProps) {
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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp
