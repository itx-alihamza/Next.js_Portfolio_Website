import React from "react";
import Layout from "./Layout";
type props = {
  className: String;
};

const Footer = ({ className = "" }: props) => {
  return (
    <footer className="w-full h-[15vh]  z-10 border-t-2 font-medium text-lg border-t-dark items-center justify-between dark:bg-dark dark:border-t-light ">
      <div className="w-full h-full grid grid-cols-3">
        <span className=" flex justify-center items-center">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <p className="flex flex-row justify-center items-center gap-2">
          Built with{" "}
          <span className="text-primary justify-center items-center dark:text-primaryDark text-2xl">
            {" "}
            &#9825;
          </span>{" "}
          by Ali Hamza
        </p>
        <p className="flex justify-center items-center flex-row gap-2 underline">
          Say Hello
        </p>
      </div>
    </footer>
  );
};

export default Footer;
