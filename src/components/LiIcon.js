import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  const springValue = useSpring(scrollYProgress);
  return (
    <figure className="absolute left-0 md:translate-x-2.5 sm:-translate-x-5 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-14 md:h-14"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stoke-1 fill-none "
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
