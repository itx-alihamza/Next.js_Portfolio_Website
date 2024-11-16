import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTheme } from "./hooks/useThemeContext";

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
  console.log("Theme :", theme);

  const cardShadow: React.CSSProperties = {
    borderRadius: "30px",
    boxShadow:
      theme === "dark"
        ? "10px 12px 0 rgba(255, 255, 255, 1)"
        : "10px 12px 0 rgba(0, 0, 0, 1)",
  };

  return (
    <div
      className={` col-span-${colSpan} p-[1.5rem] gap-6 grid ${
        colSpan === 2 ? "grid-cols-2 p-[3rem]" : ""
      } rounded-3xl border-black border dark:text-light dark:border-light`}
      style={cardShadow}
    >
      <div className="w-full h-full overflow-hidden rounded-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full"
        >
          <Image src={image} alt="cover image" className="" />
        </motion.div>
      </div>
      <div className="flex flex-col justify-between items-start">
        <h2
          className={`text-primary ${
            colSpan === 2 ? "text-xl" : "text-base"
          } font-semibold`}
        >
          {contentType}
        </h2>
        <a href={link} className="text-4xl font-bold hover:underline">
          {heading}
        </a>
        {colSpan == 2 ? (
          <p className="text-dark text-base font-medium dark:text-light">
            {detail}
          </p>
        ) : null}

        {colSpan === 2 ? (
          <div className="flex flex-row items-center gap-4">
            <GithubIcon className="w-[42px]" />
            <div className="w-36 h-12 bg-dark dark:bg-light px-2 py-1  flex justify-center items-center rounded-lg">
              <a className=" text-center text-lg  font-bold text-light dark:text-dark">
                Visit Project
              </a>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            <a
              href="http://www.something.com"
              className=" text-center text-xl underline text-dark"
            >
              Visit
            </a>
            <a href="http://www.something.com">
              <GithubIcon className="w-[30px]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFeatureCard;
