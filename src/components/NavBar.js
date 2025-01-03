import React, { useState } from "react";
import Logo from "./Logo";
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
import { useTheme } from "./hooks/useThemeContext";
import HireMe from "./HireMe";
import CustomLink from "./CustomLink.tsx";

// type Props = {
//   isDarkMode: any;
//   toogleDarkMode: any;
// };
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const { toggleTheme } = useTheme();
  const [navBtn, setNavBtn] = useState(false);

  const onNavBtnClick = () => {
    setNavBtn(!navBtn);
  };

  return (
    <header className="relative max-w-screen h-[14vh] pb-2 lg:h-[16vh] xs:h-[14vh] px-28 lg:px-16 md:px-10 pd:mb-6 sm:px-8 xs:pr-2  lg:py-0  dark:bg-dark  flex justify-between items-center dark:text-light">
      <button
        className=" w-4 h-4 hidden flex-col justify-center items-center lg:flex"
        onClick={onNavBtnClick}
      >
        <span
          className={`h-0.5 bg-black dark:bg-light w-6 rounded-sm ${
            navBtn ? "rotate-45 " : ""
          } transition transform duration-300`}
        ></span>
        <span
          className={`h-0.5 bg-black dark:bg-light w-6 rounded-sm my-1 ${
            navBtn ? "hidden" : null
          } transition transform duration-300`}
        ></span>
        <span
          className={`h-0.5 bg-black dark:bg-light w-6 rounded-sm ${
            navBtn ? "-rotate-45 -translate-y-[2px]" : ""
          } transition transform duration-300`}
        ></span>
      </button>
      {navBtn ? (
        <div className="fixed flex flex-col gap-4 justify-center items-center top-4 bottom-4 xs:top-[20%] xs:bottom-[20%] sm:top-14 sm:bottom-14 left-[12%] right-[12%] sm:left-8 sm:right-8 xs:left-4 xs:right-4   bg-opacity-90  backdrop-blur-md dark:backdrop-blur-lg bg-dark dark:bg-light/75 z-30 rounded-md">
          <nav className="flex flex-col gap-4 justify-center items-center">
            <CustomLink
              setNavBtn={(toogleValue) => {
                setNavBtn(toogleValue);
              }}
              navBtn={navBtn}
              href="/"
              title="Home"
              className="mx-4"
            />
            <CustomLink
              setNavBtn={setNavBtn}
              navBtn={navBtn}
              href="/about"
              title="About"
              className="mx-4"
            />
            <CustomLink
              setNavBtn={setNavBtn}
              navBtn={navBtn}
              href="/projects"
              title="Project"
              className="mx-4"
            />
            <CustomLink
              setNavBtn={setNavBtn}
              navBtn={navBtn}
              href="/articles"
              title="Articles"
              className="mx-4"
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-5 sm:gap-2 ">
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
              <GithubIcon className="w-full h-full text-dark dark:bg-dark dark:text-light bg-light rounded-full" />
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
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
                toggleTheme();
              }}
            >
              {mode === "dark" ? (
                <MoonIcon
                  className={`fill-dark rounded-full p-1 ${
                    mode === "dark"
                      ? " text-dark bg-white"
                      : "bg-dark text-dark"
                  }`}
                />
              ) : (
                <SunIcon
                  className={`fill-dark rounded-full p-1 bg-dark text-light`}
                />
              )}
            </motion.button>
          </nav>
        </div>
      ) : null}
      <nav className="flex gap-2 lg:hidden">
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <Logo />
      <HireMe
        className=" flex w-20 md:mt-4 md:z-10 "
        circularImgSize="md:w-20 md:h-20 "
        display="md:flex hidden"
      />
      <nav className="flex lg:hidden items-center justify-center flex-wrap gap-4 ">
        <motion.a
          setNavBtn={setNavBtn}
          navBtn={navBtn}
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          setNavBtn={setNavBtn}
          navBtn={navBtn}
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <GithubIcon className="w-full h-full" />
        </motion.a>
        <motion.a
          setNavBtn={setNavBtn}
          navBtn={navBtn}
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          setNavBtn={setNavBtn}
          navBtn={navBtn}
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          setNavBtn={setNavBtn}
          navBtn={navBtn}
          href="https://twitter.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.5 }}
          className="w-6"
        >
          <DribbbleIcon />
        </motion.a>
        <motion.button
          className="w-6"
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
            toggleTheme();
          }}
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
