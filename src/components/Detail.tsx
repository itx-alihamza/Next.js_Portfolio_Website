import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, spring } from "framer-motion";

type Props = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Detail = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" w-[60%] md:w-[80%] md:my-8   first:mt-0 last:mb-0 mb-20 flex flex-col justify-center items-center"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>

        <span className="text-gray-500">
          {time} | {address}
        </span>
        <p className="text-md md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default Detail;
