import Head from "next/head";
import React from "react";
import AnimatedText from "src/components/AnimatedText";
import ProjectFeatureCard, {
  ColSpanType,
} from "src/components/ProjectFeatureCard";
import coverImg from "../../public/images/projects/agency-website-cover-image.jpg";
import Image from "next/image";
import TransitionEffect from "src/components/TransitionEffect";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ali Hamza | projects page</title>
        <meta name="description" content="any descroptoin" />
      </Head>
      <main className="w-full h-auto flex flex-col  px-32 xl:p-24 lg:p-14 md:p-12 sm:p-8 dark:bg-dark dark:text-light">
        <TransitionEffect />
        <AnimatedText
          className="text-[90px] lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          text={`Imagination Trumps Knowledge! `}
        />
        <div className="w-full h-auto py-24 lg:py-20 md:py-18 sm:py-16 xs:py-12 grid grid-cols-2 sm:grid-cols-1 gap-24 gap-y-32 xl:gap-x-14 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <ProjectFeatureCard
            colSpan={ColSpanType.TWO}
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
