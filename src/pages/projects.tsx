import Head from "next/head";
import React from "react";
import AnimatedText from "src/components/AnimatedText";
import ProjectCard from "src/components/ProjectCard";
import coverImg from "../../public/images/projects/agency-website-cover-image.jpg";
import Image from "next/image";

const projects = () => {
  return (
    <>
      <Head>
        <title>Ali Hamza | projects page</title>
        <meta name="description" content="any descroptoin" />
      </Head>
      <main className="w-screen h-auto flex flex-col">
        <AnimatedText
          className="text-8xl mt-24 mb-6"
          text={`Imagination Trumps Knowledge! `}
        />
        <div className="w-full h-auto py-24 grid grid-cols-2 gap-9 px-32">
          <ProjectCard
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
