import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-secondary dark:text-secondary"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-secondary dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            
          <Details
              position="Cheif Executive Officer"
              company="Mâlm UF"
              companyLink="https://www.instagram.com/malm_uf/"
              time="Aug 2024-Present"
              address="Halmstad, Sweden."
              work="As CEO of Mâlm UF, I proudly lead a newly founded company in the clothing industry. With a passionate ambition, we strive to create and deliver something unique in the fashion world. Our product strategy initially focuses on offering an exclusive line of both zip hoodies, t-shirts and zip sweaters. This strategy has been designed through careful market research and design analysis, which aims to satisfy our customers' needs and expectations through a combination of style and quality.
              Our clear focus on this specific product category reflects our desire to offer a product experience that truly stands out. Through this initiative, we represent our commitment to innovative design and high quality craftsmanship. We look forward to introducing our unique clothing to the market and establishing ourselves as a prominent player in the fashion industry."
            />
            
            <Details
              position="Receptionist"
              company="Nordic Wellness"
              companyLink="https://nordicwellness.se/vara-klubbar/laholm/laholm-angelholmsvagen/"
              time="Feb 2024-Present"
              address="Laholm, Angelholmsvagen.             "
              work="In my roll as a receptionist at Nordic Wellness, I have played a pivotal role in delivering exemplary customer service and cultivating a favorable initial impression for our clients. I have adeptly managed a range of responsibilities to facilitate seamless operations, encompassing call handling, subscription management, and administrative tasks. My dedication to surpassing expectations has garnered highly favorable responses."
            />
            <Details
              position="Foreign Exchange Trader"
              company="Forex"
              companyLink=""
              time="May 2023-Present"
              address="Sweden."
              work="
    
              Experienced Foreign Exchange (Forex) Trader with a solid background in currency trading and financial markets.
              
              By combining technical and fundamental analysis and the use of trading platforms and tools, I make informed decisions and adapt quickly to market changes. My ability to work under pressure and manage rapid market movements has been crucial in securing successful results.
              
              I am passionate about continuous learning and keeping up to date with the latest trends in the currency markets."
            />
            <Details
              position="Cleaner & Receptionist"
              company="Hallandsgarden"
              companyLink="https://hallandsgarden.se/"
              time="June 2022-Aug 2023"
              address="Mellbystrand, Laholm."
              work="As responsible for the cleaning and maintenance of rooms, kitchens,
              toilets and washrooms, I mastered various
              tasks. I also had the chance to work as a
              receptionist, where I professionally welcomed customers from different
              different backgrounds, which contributed to a positive customer experience."
            />
            <Details
              position="Gardener"
              company="Laholmshem"
              companyLink="https://www.laholmshem.se/"
              time="Jun 2022-Aug 2022"
              address="Laholm, Laholm."
              work="During my summer holiday work, I was responsible for a wide
              set of tasks,
              including the trimming of hedges, installation and repair of
              various objects. I was able to adapt to a variety of working
              working environments, which contributed to my
              ability to deal with changing situations in a professional
              professional manner."
            />



          </ul>
        </div>
        </div>
    );
};

export default Experience;
