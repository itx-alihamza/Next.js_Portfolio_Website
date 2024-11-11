import Image from "next/image";
import React from "react";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const cardShadow: React.CSSProperties = {
  borderRadius: "30px",
  boxShadow: "10px 12px 0 rgba(0, 0, 0, 1)",
};

type Props = {
  image: any;
  contentType: string;
  heading: string;
  detail: string;
  link: string;
  colSpan: number;
};
const ProjectFeatureCard = ({
  image,
  contentType,
  heading,
  detail,
  link,
  colSpan = 2,
}: Props) => {
  return (
    <div
      className={` col-span-${colSpan} p-[1.5rem] gap-6 grid ${
        colSpan === 2 ? "grid-cols-2 p-[3rem]" : ""
      } rounded-3xl border-black border dark:text-light`}
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

        {colSpan == 2 ? (
          <div className="flex flex-row items-center gap-4">
            <GithubIcon className="w-[44px]" />
            <div className="w-36 h-12 bg-dark px-2 py-1  flex justify-center items-center rounded-lg">
              <a className=" text-center text-lg  font-bold text-light">
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
