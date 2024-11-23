import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "src/components/Layout";
import profilePic from "../../public/images/profile/profile.png";
import AnimatedText from "src/components/AnimatedText";
import { ExternalLink } from "src/components/Icons";
import Link from "next/link";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "src/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="w-full h-auto flex flex-col  px-32 xl:p-24 lg:p-14 md:p-12 sm:p-8 dark:bg-dark dark:text-light">
        <TransitionEffect />
        <div className=" h-full inline-block z-0 bg-light dark:bg-dark dark:text-light px-24 2xl:pb-24 2xl:px-24 md:px-12 sm:px-8 w-full pt-0">
          <div className=" flex lg:flex-col items-center justify-between w-full">
            <div className="w-1/2 lg:hidden xs:flex xs:w-full">
              <Image
                src={profilePic}
                alt="Ali Hamza"
                className="w-full h-[80%]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className=" flex flex-col w-[48%] lg:w-full lg:text-center gap-6 items-center self-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className={"!text-left !text-6xl lg:!text-center xs:!text-3xl"}
              />
              <p className="text-black xs:text-xs dark:text-light">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="w-full flex flex-row gap-3 text-lg justify-start lg:justify-center items-center">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                  className="border-2 flex flex-row justify-center items-center px-2 gap-2 w-36 h-[50px] xs:w-28 xs:h-12 xs:text-base font-bold text-light hover:bg-light hover:text-dark hover:border-black  bg-dark rounded-md dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <ExternalLink className="w-8 h-8" />
                </Link>
                <a
                  href="mailto:itx.alihamza.pro@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Content
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={LightBulb}
          alt="Light Bulb"
          className="absolute right-8 bottom-56 xl:bottom-64  xs:hidden inline-block m-0 self-end"
          height="160"
        />
        {/* <HireMe /> */}
      </main>
    </>
  );
}
