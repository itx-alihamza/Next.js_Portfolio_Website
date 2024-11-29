import Head from "next/head";
import Image from "next/image";
import AnimatedText from "src/components/AnimatedText";
import Layout from "src/components/Layout";
import ali_hamza from "../../public/images/profile/ali_hamza.jpg";
import Skills from "src/components/Skills";
import AnimatedNumbers from "src/components/AnimatedNumber";
import Experience from "src/components/Experience";
import Educatoin from "src/components/Educatoin";
import { useTheme } from "src/components/hooks/useThemeContext";
import TransitionEffect from "src/components/TransitionEffect";

type AnimatedNumProp = {
  value: number;
  text: string;
};
const AnimatedNumbersWithText = ({ value, text }: AnimatedNumProp) => {
  return (
    <div className="flex flex-col justify-center items-end lg:items-center gap-2">
      <span className="text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-extrabold">
        <AnimatedNumbers value={value} />+
      </span>
      <h3 className="text-bold text-2xl md:text-lg sm:text-base xs:text-sm md:text-center text-dark dark:text-light">
        {text}
      </h3>
    </div>
  );
};

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

      <main className=" max-w-screen h-auto dark:bg-dark dark:text-light">
        <TransitionEffect />
        <Layout className=" py-20 pt-12 lg:p-14 sm:p-8">
          <div className="text-center mb-16 sm:mb-8">
            <AnimatedText
              text="Passion Fuels"
              className="text-[90px] lg:!text-7xl sm:!text-6xl xs:!text-4xl"
            />
            <AnimatedText
              text="Purpose!"
              className="text-[90px] lg:!text-7xl sm:!text-6xl xs:!text-4xl"
            />
          </div>
          <div className="w-full grid grid-cols-3 lg:gap-16 lg:grid-cols-2 md:grid-cols-1">
            <div className="flex flex-col text-justify font-medium items-start gap-4 overflow-hidden md:order-2">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                BIOGRAPHY
              </h3>
              <p>
                Hi, I&apos;m <b>Ali Hamza</b>, a web developer and UI/UX
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
              className="ml-16 lg:ml-0 border-1 border-purple-800  relative max-w-11/12 h-max p-6 border rounded-2xl bg-light dark:bg-dark  dark:border-light md:order-1  "
              style={cardStyle}
            >
              {/* <div className="border-2 border-blue-950 absolute -top-4 -left-3 p-6  h-max w-full bg-light rounded-3xl"> */}
              <Image
                className=" rounded-3xl"
                src={ali_hamza}
                alt="Profile pic"
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* </div> */}
            </div>
            <div className="flex flex-col justify-between items-end lg:items-center overflow-hidden lg:col-span-2 md:col-span-1 md:order-3 lg:flex-row">
              <AnimatedNumbersWithText text="satisfied clients" value={50} />
              <AnimatedNumbersWithText text="projects completed" value={40} />
              <AnimatedNumbersWithText text="Years of experiences" value={4} />
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
