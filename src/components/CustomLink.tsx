import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  title: string;
  className: string;
  setNavBtn: any;
  navBtn: boolean;
};
const CustomLink = ({
  href,
  title,
  className = "",
  setNavBtn,
  navBtn,
}: Props) => {
  const router = useRouter();
  console.log("setNavFunc :", setNavBtn);

  const onNavBtnClick = () => {
    if (navBtn === true) setNavBtn(false);
  };

  return (
    <div onClick={onNavBtnClick}>
      <Link
        href={href}
        className={`${className} relative group lg:text-light lg:dark:text-dark text-dark font-medium dark:text-light`}
      >
        {title}
        <span
          className={`h-[1px] inline-block w-[0px] lg:bg-light lg:dark:bg-dark bg-black dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300
            ${router.asPath == href ? "w-full" : "w-0"}
          `}
        >
          &nbsp;
        </span>
      </Link>
    </div>
  );
};

export default CustomLink;
