import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 bottom-0 right-full w-screen h-screen bg-primary dark:bg-primaryDark  z-30"
      />
      <motion.div
        initial={{ right: "0%" }}
        animate={{
          right: "100%",
          transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
        }}
        className="absolute top-0 bottom-0 left-0 right-full bg-light dark:bg-dark  z-20"
      />
      <motion.div
        initial={{ right: "0%" }}
        animate={{
          right: "100%",
          transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
        }}
        className="absolute top-0 bottom-0 left-0 right-full bg-dark dark:bg-light  z-10"
      />
    </>
  );
};

export default TransitionEffect;
