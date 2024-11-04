import React from "react";
import Detail from "./Detail";

const Educatoin = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center">
      <h1 className="text-8xl w-full text-center font-bold pt-[15rem] pb-40">
        Education
      </h1>
      <div className="relative w-9/12 flex justify-center items-center">
        <div className="w-1 h-full absolute left-9 top-0 bg-dark origin-top"></div>
        <ul className="w-full ml-4 flex flex-col justify-between items-center">
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
