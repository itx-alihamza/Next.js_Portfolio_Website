import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="absolute w-max h-10 bg-dark xs:bg-transparent xs:text-dark dark:xs:bg-transparent dark:xs:text-light flex justify-center items-center text-md px-5 py-6 md:px-2 md:py-4 sm:px-1.5 sm:py-3 font-semibold text-light rounded-full shadow-dark cursor-pointer dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl md:text-6xl sm:text-5xl xs:text-4xl pt-64 md:pt-32 text-center ">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg dark:lg:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm dark:bg-circularDark lg:h-[80vh] md:h-[60vh] xs:h-[50vh]">
        <motion.div
          className=" w-max h-10 bg-dark flex justify-center items-center text-md p-8 py-10 md:px-4 md:py-6  font-semibold text-light rounded-full shadow-dark cursor-pointer dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-6vw" y="-10vw" />
        <Skill name="NextJS" x="-22vw" y="-17vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="Javascript" x="15vw" y="-12vw" />
        <Skill name="GatsbyJS" x="-3vw" y="26vw" />
        <Skill name="Web Design" x="-32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Github" x="25vw" y="4vw" />
      </div>
    </>
  );
};

export default Skills;
