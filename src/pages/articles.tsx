import React from "react";
import AnimatedText from "src/components/AnimatedText";
import ArticleFeatureCard from "src/components/ArticleFeatureCard";
import ListCard from "src/components/ListCard";
import coverImg from "../../public/images/projects/agency-website-cover-image.jpg";
import Head from "next/head";
import { motion } from "framer-motion";

const articles = () => {
  return (
    <>
      <Head>
        <title>About | Ali Hamza</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full h-auto flex flex-col px-32 dark:bg-dark dark:text-light">
        <AnimatedText
          className="text-8xl mt-24 mb-20"
          text={"Words Can Change the World! "}
        />
        <div className="grid grid-cols-2 gap-24">
          <ArticleFeatureCard
            image={coverImg}
            heading="Build a custom pagination component in reactjs from scratch"
            link=""
            detail="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            length="9 min read"
          />
          <ArticleFeatureCard
            image={coverImg}
            heading="Build a custom pagination component in reactjs from scratch"
            link=""
            detail="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            length="9 min read"
          />
        </div>
        <div className="w-full text-center flex justify-center items-center">
          <h2 className="text-3xl font-bold mt-36 mb-14">All Articles</h2>
        </div>
        <div className="w-full h-auto flex flex-col gap-6 mb-40">
          <ListCard
            heading="Form validation in reactjs: build a reusable custom hook for inputs and error handling"
            date="January 27, 2023"
          />
          <ListCard
            heading="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
            date="January 27, 2023"
          />
          <ListCard
            heading="creating an efficient modal component in react using hooks and portals"
            date="January 27, 2023"
          />
          <ListCard
            heading="Form validation in reactjs: build a reusable custom hook for inputs and error handling"
            date="January 27, 2023"
          />
          <ListCard
            heading="Form validation in reactjs: build a reusable custom hook for inputs and error handling"
            date="January 27, 2023"
          />
          <ListCard
            heading="Form validation in reactjs: build a reusable custom hook for inputs and error handling"
            date="January 27, 2023"
          />
        </div>
      </main>
    </>
  );
};

export default articles;
