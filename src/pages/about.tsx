import Head from "next/head";
import Image from "next/image";
import AnimatedText from "src/components/AnimatedText";
import Layout from "src/components/Layout";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";

import Skills from "src/components/Skills";
import AnimatedNumbers from "src/components/AnimatedNumber";
import Experience from "src/components/Experience";
const cardStyle: React.CSSProperties = {
  padding: "20px",
  borderRadius: "20px",
  backgroundColor: "white",
  boxShadow: "14px 14px 0px rgba(0, 0, 0, 1)", // Adjust shadow color and size for a solid look
};

const about = () => {
  return (
    <>
      <Head>
        <title>AliHamza | About Page</title>
      </Head>
      <main className="w-screen h-auto">
        <Layout className="border border-black pt-12">
          <div className="text-center mb-16">
            <AnimatedText text="Passion Fuels" className="text-[90px]" />
            <AnimatedText text="Purpose!" className="text-[90px]" />
          </div>
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col font-medium items-start gap-4 overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-700">BIOGRAPHY</h3>
              <p className="">
                Hi, I'm <b>CodeBucks</b>, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>
              <p className="">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p>
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="border-1 border-purple-800  relative w-full h-max p-6 border rounded-2xl bg-black "
              style={cardStyle}
            >
              {/* <div className="border-2 border-blue-950 absolute -top-4 -left-3 p-6  h-max w-full bg-light rounded-3xl"> */}
              <Image
                className=" rounded-3xl"
                src={ProfilePic}
                alt="Profile pic"
              />
              {/* </div> */}
            </div>
            <div className="flex flex-col justify-between items-end overflow-hidden">
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h3 className="text-bold text-2xl text-dark">
                  satisfied clients
                </h3>
              </div>
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h3 className="text-bold text-2xl text-dark">
                  projects completed
                </h3>
              </div>
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h3 className="text-bold text-2xl text-dark">
                  Years of experiences
                </h3>
              </div>
            </div>
          </div>
          {/* Skill Section */}
          <Skills />
          {/* Experirence Section */}
          <div className="border-2 w-full h-auto flex flex-col justify-center items-center">
            <h1 className="text-8xl w-full text-center font-bold pt-[15rem] pb-40">
              Experience
            </h1>
            <div className="relative w-9/12 flex justify-center items-center">
              <div className="w-1 h-full absolute left-8 top-0 bg-dark origin-top"></div>
              <ul className="w-full ml-4 flex flex-col justify-between items-center">
                <Experience
                  position="Software Engineer"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
                <Experience
                  position="Software Engineer"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
                <Experience
                  position="Software Engineer"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
                <Experience
                  position="Software Engineer"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
                <Experience
                  position="Software Engineer"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                />
              </ul>
            </div>
          </div>
          {/* Education Section */}
          <div className="border-2 w-full h-auto flex flex-col justify-center items-center">
            <h1 className="text-8xl w-full text-center font-bold pt-[15rem] pb-40">
              Education
            </h1>
            <div className="relative w-9/12 flex justify-center items-center">
              <div className="w-1 h-full absolute left-8 top-0 bg-dark origin-top"></div>
              <ul className="w-full ml-4 flex flex-col justify-between items-center">
                <Experience
                  position="Bachelor of Science in Computer Science"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2016-2020"
                  address="Massachusetts Institute of Technology (MIT)"
                  work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />
                <Experience
                  position="Bachelor of Science in Computer Science"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2016-2020"
                  address="Massachusetts Institute of Technology (MIT)"
                  work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />
                <Experience
                  position="Bachelor of Science in Computer Science"
                  company="Google"
                  companyLink="http://www.google.com"
                  time="2016-2020"
                  address="Massachusetts Institute of Technology (MIT)"
                  work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />
              </ul>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
