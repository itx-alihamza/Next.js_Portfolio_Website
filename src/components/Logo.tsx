import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="absolute left-1/2 top-4 -translate-x-1/2 flex justify-center items-center">
      <MotionLink
        href="/"
        className="h-16 w-16 bg-black text-2xl font-bold text-white rounded-full  flex justify-center items-center "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;
