import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import profilePic from "../../public/images/profile/profile.png";
import AnimatedText from "src/components/AnimatedText";
import { ExternalLink } from "src/components/Icons";
import Link from "next/link";
import HireMe from "src/components/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="relative flex items-center text-dark h-full w-full dark:bg-dark dark:text-light">
        <Layout className="!w-full pt-0">
          <div className=" flex md:flex-col items-center justify-between w-full">
            <div className="w-1/2 md:hidden xs:flex xs:w-full">
              <Image
                src={profilePic}
                alt="Ali Hamza"
                className="w-full h-[80%]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className=" flex flex-col w-[48%] md:w-full md:text-center gap-6 items-center self-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className={"!text-left !text-6xl md:!text-center xs:!text-3xl"}
              />
              <p className="text-black xs:text-xs dark:text-light">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="w-full flex flex-row gap-3 text-lg justify-start md:justify-center items-center">
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
        </Layout>
        <Image
          src={LightBulb}
          alt="Light Bulb"
          className="absolute right-8 bottom-56 md:bottom-24 xs:hidden inline-block m-0 self-end"
          height="160"
        />
        {/* <HireMe /> */}
      </main>
    </>
  );
}
