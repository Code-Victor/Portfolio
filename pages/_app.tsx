import type { AppProps } from 'next/app'
import { darkTheme } from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { Navbar } from '../components/inc';


function MyApp({ Component, pageProps }: AppProps) {
  return(
        <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Navbar/>
    <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp
