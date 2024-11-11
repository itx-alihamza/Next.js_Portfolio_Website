import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log("Router :", router);

  return (
    <Link
      href={href}
      className={`${className} relative group text-dark font-medium dark:text-light`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-[0px] bg-black dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300
          ${router.asPath == href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// type Props = {
//   isDarkMode: any;
//   toogleDarkMode: any;
// };
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full h-[14vh] px-28 py-8 dark:bg-dark  flex justify-between dark:text-light">
      <nav className=" gap-2">
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap gap-4 ">
        <motion.a
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <DribbbleIcon />
        </motion.a>
        <motion.button
          className="w-6"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <MoonIcon
              className={`fill-dark rounded-full p-1 ${
                mode === "dark" ? " text-dark bg-light" : "bg-dark text-dark"
              }`}
            />
          ) : (
            <SunIcon
              className={`fill-dark rounded-full p-1 bg-dark text-light`}
            />
          )}
        </motion.button>
      </nav>
    </header>
  );
};

export default NavBar;
