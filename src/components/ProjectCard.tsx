import Image from "next/image";
import React from "react";
import { GithubIcon } from "./Icons";

const cardShadow: React.CSSProperties = {
  borderRadius: "30px",
  boxShadow: "10px 12px 0 rgba(0, 0, 0, 1)",
};

type Props = {
  image: any;
  contentType: string;
  heading: string;
  detail: string;
  link: string;
  colSpan: number;
};
const ProjectCard = ({
  image,
  contentType,
  heading,
  detail,
  link,
  colSpan = 2,
}: Props) => {
  return (
    <div
      className={` col-span-${colSpan} p-[3rem] gap-8 grid ${
        colSpan === 2 ? "grid-cols-2" : ""
      } rounded-3xl border-black border`}
      style={cardShadow}
    >
      <div className="w-full h-full overflow-hidden rounded-lg">
        <Image src={image} alt="cover image" className="" />
      </div>
      <div className="flex flex-col justify-around items-start">
        <h2 className="text-primary text-xl font-semibold">{contentType}</h2>
        <a href={link} className="text-4xl font-bold hover:underline-offset-1">
          {heading}
        </a>
        <p className="text-dark text-base">{detail}</p>
        <div className="flex flex-row gap-8">
          <GithubIcon className="w-9" />
          <div className="w-26 h-10 bg-dark px-2 py-1  flex justify-center items-center rounded-lg">
            <a className=" text-center text-sm text-light">Visit Project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
