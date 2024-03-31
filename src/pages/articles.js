import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/CS.jpg";
import blog2 from "../../public/images/articles/GS.jpg";
import blog3 from "../../public/images/articles/CA.jpg";
import blog4 from "../../public/images/articles/CF.jpg";
import blog5 from "../../public/images/articles/TCT.jpg";
import blog6 from "../../public/images/articles/ASEJS.jpg";
import blog7 from "../../public/images/articles/SEJS.jpg";
import blog8 from "../../public/images/articles/CSJS.jpg";
import blog9 from "../../public/images/articles/CCNAv7.jpg";
import blog10 from "../../public/images/articles/ITME.jpg";
import blog11 from "../../public/images/articles/investmentrisk.jpg";
import blog12 from "../../public/images/articles/CJS.jpg";
import blog13 from "../../public/images/articles/OPSJS.jpg";
import blog14 from "../../public/images/articles/the sciemnce.jpg";
import blog15 from "../../public/images/articles/Fundementals.jpg";
import blog16 from "../../public/images/articles/Sales.jpg";
import blog17 from "../../public/images/articles/CISCOCYBER.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-secondary font-semibold dark:text-secondary min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-secondary font-semibold dark:text-secondary">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Achievements Page</title>
        <meta name="description" content="
Explore Liam's collection of certificates, showcasing his expertise in various areas of digital design and development. Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio, ensuring maximum visibility and impact in the competitive tech industry. Whether you're a seasoned professional or just starting your journey, Liam's portfolio offers inspiration and practical advice for advancing your career and achieving success in the digital landscape." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Achievements & Certificates!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle
              img={blog1}
              title="Career Essentials In Cybersecurity by Microsoft & LinkedIn"
              time="1 min read"
              summary="Cybersecurity, Information Security Awareness and Threat & Vulnerability Management are the key topics covered in this course."
              link="https://www.linkedin.com/learning/certificates/4095dab9b5cd98b2296290f189d1ab101a562b7ef537b2cec6ac1caf22af70bf"
            />

            <FeaturedArticle
              img={blog2}
              title="Software Engineering Job Simulation by Goldman Sachs"
              time="1 min read"
              summary="Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements. Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat.
              "
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_5HT84wwTYWJvpPf3b_1702829296488_completion_certificate.pdf"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Achievements & Certificates
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Cybersecurity Awareness: Cybersecurity Terminology"
              img={blog3}
              date="January 07, 2024"
              link="https://www.linkedin.com/learning/certificates/e495bf6d35bba50fd9c12dbfc10a9e1b3db156729e07d4914bb636b9ca13101f"
            />
            <Article
              title="Cybersecurity Foundations"
              img={blog4}
              date="January 20, 2024"
              link="https://www.linkedin.com/learning/certificates/ddb162594ac2fa4b3eb30dcff57fb239e82b307077680f5a5d0442339faf2874"
            />
            <Article
              title="The Cybersecurity Threat Landscape
              "
              img={blog5}
              date="January 07, 2024"
              link="https://www.linkedin.com/learning/certificates/773ccbebe9eaeafdf0a8952334bb1f7a33b7f501f6cc5530c7dc940c188989b7"
            />
            <Article
              title="Walmart Advanced Software Engineering Job
              Simulation"
              img={blog6}
              date="January 06, 2024"
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_5HT84wwTYWJvpPf3b_1704551875328_completion_certificate.pdf"
            />
            <Article
              title="Electronic Arts Software Engineering Job Simulation"
              img={blog7}
              date="December 17, 2023"
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Electronic%20Arts/a77WE3de8qrxWferQ_Electronic%20Arts_5HT84wwTYWJvpPf3b_1702845732584_completion_certificate.pdf"
            />
            <Article
              title="Customer Service Job Simulation
              "
              date="December 16, 2023"
              img={blog8}
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Fidelity%20Investments/mjBDAH6fdSc5BHBKu_Fidelity%20Investments_5HT84wwTYWJvpPf3b_1702741761226_completion_certificate.pdf"
            />
                        <Article
              title="CCNAv7: Introduction to Networks"
              date="June 07, 2023"
              img={blog9}
              link="#"
            />
                        <Article
              title="Introduction to Microsoft Excel"
              date="December 03, 2023"
              img={blog10}
              link="https://www.coursera.org/account/accomplishments/certificate/VL3Q7QBJKAL8"
            />
                        <Article
              title="Investment Risk Management
              "
              date="December 08, 2023"
              img={blog11}
              link="https://www.coursera.org/account/accomplishments/certificate/KPKYJ5J9VNF8"
            />
                                    <Article
              title="MasterCard Cybersecurity Job Simulation"
              date="December 17, 2023"
              img={blog12}
              link="https://www.coursera.org/account/accomplishments/certificate/KPKYJ5J9VNF8"
            />                        <Article
            title="Red Bull On-Premise Sales Job Simulation
            "
            date="December 17, 2023"
            img={blog13}
            link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Red%20Bull/s6RNpxzBkpREvE4xk_Red%20Bull_5HT84wwTYWJvpPf3b_1702826981252_completion_certificate.pdf"
          />
          <Article
            title="The Science of Leadership
            "
            date="December 08, 2023"
            img={blog14}
            link="https://www.udemy.com/certificate/UC-5acaaf68-72ab-41a0-9f0e-c736c7916a52/"
          />
          <Article
            title="Fundamentals of digital marketing
            "
            date="October 15, 2023"
            img={blog15}
            link="https://skillshop.exceedlms.com/student/award/GMt1X8Xu4iPo9C4i2KntWJGA"
          />
                    <Article
            title="Sales Training: Practical Sales Techniques
            "
            date="November 09, 2023"
            img={blog16}
            link="https://www.udemy.com/certificate/UC-ea41cc17-a060-43ae-ab22-bfe0a55dc57c/"
          />
                              <Article
            title="Cisco Introduction to Cybersecurity
            "
            date="December 06, 2023"
            img={blog17}
            link="#"
          />
          </ul>
        </Layout>
      </main>
    </>
  );
}
