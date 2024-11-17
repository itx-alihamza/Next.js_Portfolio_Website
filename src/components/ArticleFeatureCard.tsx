import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { useTheme } from "./hooks/useThemeContext";
import Link from "next/link";

const noOfLines: React.CSSProperties = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: 2, // Change this number to control the number of lines
};

type Props = {
  image: any;
  heading: string;
  link: string;
  detail: string;
  length: string;
  colSpan?: number | null;
};
const ArticleFeatureCard = ({
  image,
  heading,
  link,
  detail,
  length,
  colSpan = 1,
}: Props) => {
  const { theme } = useTheme();
  const cardShadow: React.CSSProperties = {
    borderRadius: "30px",
    boxShadow:
      theme === "dark"
        ? "10px 12px 0 rgba(255, 255, 255, 1)"
        : "10px 12px 0 rgba(0, 0, 0, 1)",
  };

  return (
    <div
      className={`col-span-${colSpan} dark:border-light dark:bg-dark dark:text-light w-full h-auto p-[1.3rem] gap-8 grid ${
        colSpan === 2 ? "grid-cols-2 p-[3rem]" : ""
      } rounded-3xl border-black border`}
      style={cardShadow}
    >
      <Link href="" className="w-full h-auto overflow-hidden rounded-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full"
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
      <div className="flex flex-col gap-3 justify-between items-start">
        <a href={link} className="text-2xl font-bold hover:underline">
          {heading}
        </a>
        <p className="text-dark text-sm font-medium  dark:text-light">
          {detail}
        </p>
        <span
          className={`text-primary dark:text-primaryDark ${
            colSpan === 2 ? "text-xl" : "text-base"
          } font-semibold`}
        >
          {length}
        </span>
      </div>
    </div>
  );
};

export default ArticleFeatureCard;
