import React from "react";
import Image from "next/image";
import circularText from "../../public/images/svgs/Group.svg";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="z-1000 fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          alt="Circular Image"
          src={circularText}
          width={150}
          height={150}
          className="animate-spin-slow"
        />
        <Link
          href="mailto:itx.alihamza.pro@gmail.com"
          className="w-[90px] h-[90px] flex justify-center items-center border-2 border-dark text-light font-semibold bg-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-light hover:text-dark rounded-full shadow-md"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
