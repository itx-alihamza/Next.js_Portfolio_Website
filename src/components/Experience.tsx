import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Detail from "./Detail";

const Experience = () => {
  const ref: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center">
      <h1 className="text-8xl w-full text-center font-bold pt-[15rem] pb-40">
        Experience
      </h1>
      <div
        ref={ref}
        className="relative w-9/12 md:w-full flex justify-center items-center"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-1 h-full absolute left-9 top-0 bg-dark origin-top dark:bg-primaryDark"
        />
        <ul className="w-full ml-4 flex flex-col justify-between items-center">
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="http://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="http://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="http://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="http://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            companyLink="http://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
