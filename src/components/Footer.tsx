import React from "react";
import Layout from "./Layout";
type props = {
  className: String;
};

const Footer = ({ className = "" }: props) => {
  return (
    <footer className="w-full h-[15vh] flex flex-row z-10 border-t-2 font-medium text-lg border-t-dark items-center justify-between dark:bordert-light ">
      <Layout className="border py-6 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <p className="flex flex-row justify-center items-center gap-2">
          Built with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl">
            {" "}
            &#9825;
          </span>{" "}
          by Ali Hamza
        </p>
        <p className="flex flex-row gap-2 underline">Say Hello</p>
      </Layout>
    </footer>
  );
};

export default Footer;
