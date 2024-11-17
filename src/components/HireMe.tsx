import React from "react";
import Image from "next/image";
import circularText from "../../public/images/svgs/Group.svg";
import Link from "next/link";

type Prop = {
  className?: string;
  circularImgSize?: string;
};

const HireMe = ({ className, circularImgSize }: Prop) => {
  return (
    <div
      className={`invisible left-4 bottom-4 items-center justify-center overflow-hidden ${className}`}
    >
      <div className="w-48  h-auto flex items-center justify-center relative ">
        <Image
          alt="Circular Image"
          src={circularText}
          className={`${circularImgSize} w-40 h-40 animate-spin-slow dark:text-light dark:invert`}
        />
        <Link
          href="mailto:itx.alihamza.pro@gmail.com"
          className="w-[90px] md:w-12 md:h-12 md:p-[2px] h-[90px] flex justify-center items-center border-2 border-dark md:text-[10px] text-center text-light font-semibold bg-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-light hover:text-dark rounded-full shadow-md dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
