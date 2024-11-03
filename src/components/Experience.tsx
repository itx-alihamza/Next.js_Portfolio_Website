import React from "react";

type Props = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Experience = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) => {
  return (
    <li className="w-[60%] first:mt-0 last:mb-0 mb-20 flex flex-col justify-center items-center">
      <div>
        <h3 className="font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} className="text-primary">
            @{company}
          </a>
        </h3>

        <span className="text-gray-500">
          {time} | {address}
        </span>
        <p className="text-md">{work}</p>
      </div>
    </li>
  );
};

export default Experience;
