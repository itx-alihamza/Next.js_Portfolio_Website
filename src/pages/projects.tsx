import Head from "next/head";
import React from "react";
import AnimatedText from "src/components/AnimatedText";
import ProjectFeatureCard from "src/components/ProjectFeatureCard";
import coverImg from "../../public/images/projects/agency-website-cover-image.jpg";
import Image from "next/image";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ali Hamza | projects page</title>
        <meta name="description" content="any descroptoin" />
      </Head>
      <main className="w-full h-auto flex flex-col  px-32 dark:bg-dark dark:text-light">
        <AnimatedText
          className="text-8xl mt-24 mb-6"
          text={`Imagination Trumps Knowledge! `}
        />
        <div className="w-full h-auto py-24 grid grid-cols-2 gap-28 ">
          <ProjectFeatureCard
            colSpan={2}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
          <ProjectFeatureCard
            colSpan={1}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
          <ProjectFeatureCard
            colSpan={1}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
          <ProjectFeatureCard
            colSpan={2}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
          <ProjectFeatureCard
            colSpan={1}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
          <ProjectFeatureCard
            colSpan={1}
            contentType="Portfolio Website"
            heading="React Portfolio Website"
            detail="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            image={coverImg}
            link=""
          />
        </div>
      </main>
    </>
  );
};

export default projects;
