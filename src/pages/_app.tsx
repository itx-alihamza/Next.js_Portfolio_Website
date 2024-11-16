import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "src/components/Footer";
import HireMe from "src/components/HireMe";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "src/components/hooks/useThemeContext";

const montserrant = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: any) {
  const curPath = usePathname();
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-light">
        <NavBar />

        <main
          className={`${montserrant.variable} font-mont bg-light dark:bg-dark w-full  flex flex-col flex-grow`}
        >
          <Component {...pageProps} />
        </main>

        <Footer className={``} />
        {curPath == "/" ? <HireMe /> : null}
      </div>
    </ThemeProvider>
  );
}
