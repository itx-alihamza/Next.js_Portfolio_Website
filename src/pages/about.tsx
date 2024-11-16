import Head from "next/head";
import Image from "next/image";
import AnimatedText from "src/components/AnimatedText";
import Layout from "src/components/Layout";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "src/components/Skills";
import AnimatedNumbers from "src/components/AnimatedNumber";
import Experience from "src/components/Experience";
import Educatoin from "src/components/Educatoin";
import { useTheme } from "src/components/hooks/useThemeContext";

const About = () => {
  const { theme } = useTheme();
  const cardStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "20px",

    boxShadow:
      theme === "dark"
        ? "10px 12px 0 rgba(255, 255, 255, 1)"
        : "10px 12px 0 rgba(0, 0, 0, 1)",
  };
  return (
    <>
      <Head>
        <title>AliHamza | About Page</title>
      </Head>
      <main className="max-w-screen h-auto dark:bg-dark dark:text-light">
        <Layout className=" py-20">
          <div className="text-center mb-16">
            <AnimatedText text="Passion Fuels" className="text-[90px]" />
            <AnimatedText text="Purpose!" className="text-[90px]" />
          </div>
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col text-justify font-medium items-start gap-4 overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                BIOGRAPHY
              </h3>
              <p>
                Hi, I&apos;m <b>CodeBucks</b>, a web developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients&apos; visions to life.
              </p>
              <p>
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p>
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="ml-16 border-1 border-purple-800  relative w-full h-max p-6 border rounded-2xl bg-light dark:bg-dark  dark:border-light   "
              style={cardStyle}
            >
              {/* <div className="border-2 border-blue-950 absolute -top-4 -left-3 p-6  h-max w-full bg-light rounded-3xl"> */}
              <Image
                className=" rounded-3xl"
                src={ProfilePic}
                alt="Profile pic"
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* </div> */}
            </div>
            <div className="flex flex-col justify-between items-end overflow-hidden">
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h3 className="text-bold text-2xl text-dark dark:text-light">
                  satisfied clients
                </h3>
              </div>
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h3 className="text-bold text-2xl text-dark dark:text-light">
                  projects completed
                </h3>
              </div>
              <div className="flex flex-col justify-center items-end gap-2">
                <span className="text-7xl font-extrabold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h3 className="text-bold text-2xl text-dark dark:text-light">
                  Years of experiences
                </h3>
              </div>
            </div>
          </div>
          {/* Skill Section */}
          <Skills />
          {/* Experience Section */}
          <Experience />
          {/* Education Section */}
          <Educatoin />
        </Layout>
      </main>
    </>
  );
};

export default About;
