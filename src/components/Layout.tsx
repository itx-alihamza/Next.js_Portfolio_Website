import React from "react";

const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light px-24 lg:py-0 lg:px-28 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
