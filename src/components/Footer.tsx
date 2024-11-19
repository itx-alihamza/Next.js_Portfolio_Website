import React from "react";
type props = {
  className: String;
};

const Footer = ({ className = "" }: props) => {
  return (
    <footer className="w-full h-[15vh]  z-10 border-t-2 font-medium text-lg border-t-dark items-center justify-between dark:bg-dark dark:border-t-light ">
      <div className="w-full h-full grid   grid-cols-3 md:grid-cols-1">
        <span className=" py-1 md:pt-10  flex justify-center items-center">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <p className=" py-1 flex flex-row bg-[#f5f5f5] dark:bg-dark justify-center items-center gap-2">
          Built with{" "}
          <span className=" text-primary justify-center items-center dark:text-primaryDark text-2xl">
            {" "}
            &#9825;
          </span>{" "}
          by Ali Hamza
        </p>
        <p className=" py-1 md:pb-10 flex bg-[#f5f5f5] dark:bg-dark justify-center items-center flex-row gap-2 underline">
          Say Hello
        </p>
      </div>
    </footer>
  );
};

export default Footer;
