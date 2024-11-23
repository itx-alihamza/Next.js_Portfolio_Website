import React from "react";
import Detail from "./Detail";

const Educatoin = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center">
      <h1 className="text-8xl md:text-6xl xs:text-4xl w-full text-center font-bold pt-[15rem] pb-40 md:pb-16">
        Education
      </h1>
      <div className="relative w-9/12 md:w-full lg:w-full flex justify-center items-center">
        <div className="w-1 md:w-0.5 h-full absolute left-9 sm:left-2 top-0 bg-dark origin-top dark:bg-primaryDark" />
        <ul className="w-full ml-4 xs:ml-2 flex flex-col justify-between items-center">
          <Detail
            position="Bachelor of Science in Computer Science"
            company="Google"
            companyLink="http://www.google.com"
            time="2016-2020"
            address="Massachusetts Institute of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Detail
            position="Bachelor of Science in Computer Science"
            company="Google"
            companyLink="http://www.google.com"
            time="2016-2020"
            address="Massachusetts Institute of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Detail
            position="Bachelor of Science in Computer Science"
            company="Google"
            companyLink="http://www.google.com"
            time="2016-2020"
            address="Massachusetts Institute of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Educatoin;
