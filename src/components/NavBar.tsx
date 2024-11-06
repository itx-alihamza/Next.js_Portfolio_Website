import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }: any) => {
  const router = useRouter();
  console.log("Router :", router);

  return (
    <Link
      href={href}
      className={`${className} relative group text-dark font-medium`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-[0px] bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300
          ${router.asPath == href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full h-[13vh] px-28 py-8  flex justify-between">
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
      </nav>
    </header>
  );
};

export default NavBar;
