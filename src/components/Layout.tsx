import React from "react";

const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`w-screen h-full inline-block z-0 bg-light dark:bg-dark dark:text-light px-24 2xl:pb-24 2xl:px-24 md:px-12 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
