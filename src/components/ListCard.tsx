import React from "react";
import MovingImg from "./MovingImg";
import movingCardImg from "../../public/images/articles/create loading screen in react js.jpg";
import { motion } from "framer-motion";
const cardShadow: React.CSSProperties = {
  borderRadius: "12px",
  boxShadow: "3px 3px 0 rgba(0, 0, 0, 1)",
};

type Props = {
  className?: string;
  heading: string;
  date: string;
};

const ListCard = ({ className, heading, date }: Props) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className={` shado w-full h-auto flex flex-row justify-between items-center px-2 py-5 border border-black rounded-lg  dark:text-light`}
      style={cardShadow}
    >
      <a
        href=""
        className="w-[80%] text-[1.4rem] text-dark font-semibold hover:underline  dark:text-light"
      >
        {heading}
      </a>
      {/* <MovingImg img={movingCardImg} /> */}
      <span className="text-primary font-semibold  dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

export default ListCard;
