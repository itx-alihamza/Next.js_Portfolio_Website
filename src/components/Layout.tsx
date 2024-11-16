import React from "react";

const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light lg:py-0 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
