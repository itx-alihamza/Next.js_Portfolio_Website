import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTheme } from "./hooks/useThemeContext";
import Link from "next/link";

export enum ColSpanType {
  TWO = 2,
  ONE = 1,
}

type Props = {
  image: any;
  contentType: string;
  heading: string;
  detail: string;
  link: string;
  colSpan?: ColSpanType;
};
const ProjectFeatureCard = ({
  image,
  contentType,
  heading,
  detail,
  link,
  colSpan = ColSpanType.TWO,
}: Props) => {
  //Inside Component
  const { theme } = useTheme();
  console.log("Theme Feature Card:", theme);

  const cardShadow: React.CSSProperties = {
    borderRadius: "30px",
    boxShadow:
      theme === "dark"
        ? "10px 12px 0 rgba(255, 255, 255, 1)"
        : "10px 12px 0 rgba(0, 0, 0, 1)",
  };
  return (
    <div
      className={`${
        colSpan === ColSpanType.TWO ? "col-span-2 sm:col-span-1" : "col-span-1"
      } p-6 md:p-5 gap-6 grid ${
        colSpan === ColSpanType.TWO ? "grid-cols-2 lg:grid-cols-1 p-[3rem]" : ""
      } rounded-3xl border-black border dark:text-light dark:border-light`}
      style={cardShadow}
    >
      <Link
        href=""
        className="w-full h-full overflow-hidden rounded-lg content-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto "
        >
          <Image
            src={image}
            alt="cover image"
            className=""
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>
      <div className="flex flex-col md:gap-4 justify-between items-start">
        <h2
          className={`text-primary ${
            colSpan === 2 ? "text-xl md:text-lg" : "text-base"
          } font-semibold`}
        >
          {contentType}
        </h2>
        <a
          href={link}
          className="text-4xl lg:text-2xl font-bold hover:underline"
        >
          {heading}
        </a>
        <p
          className={`${
            colSpan === ColSpanType.TWO ? "block" : "hidden"
          }  sm:block text-dark text-base font-medium dark:text-light`}
        >
          {detail}
        </p>

        {/* {colSpan === ColSpanType.TWO ? ( */}
        <div
          className={`${
            colSpan === ColSpanType.TWO ? "flex" : "hidden sm:flex"
          } flex-row items-center gap-4`}
        >
          <GithubIcon className="w-10 h-10" />
          <div className="w-34 h-10 bg-dark dark:bg-light px-2 py-1  flex justify-center items-center rounded-lg">
            <a className=" text-center text-base  font-bold text-light dark:text-dark">
              Visit Project
            </a>
          </div>
        </div>
        {/* ) : ( */}
        <div
          className={`${
            colSpan === ColSpanType.TWO ? "hidden" : "flex sm:hidden"
          } w-full  flex-row justify-between items-center`}
        >
          <a
            href="http://www.something.com"
            className=" text-center text-xl underline text-dark"
          >
            Visit
          </a>
          <a href="http://www.something.com">
            <GithubIcon className="w-8 h-8" />
          </a>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ProjectFeatureCard;
