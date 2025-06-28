import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import ExperienceCard from "../components/ExperienceCard";
import SkillsSection from "../components/SkillsSection";
import InfoList from "../components/InfoList";
import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <motion.section
        className="my-3"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-xl font-bold">Summary</h2>
        <p className="text-base">
          I build frontend stuff — mostly with React, Next.js, and TypeScript.
          Been doing it for a few years now. Focus is usually on performance,
          accessibility, and making sure things don’t break. Not really into
          overcomplicating things. Just like clean, fast interfaces that do what
          they’re supposed to. Occasionally care a lot about Core Web Vitals.
        </p>
      </motion.section>

      <motion.section
        className="my-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-xl font-bold">Experience</h2>
        <div className="flex flex-col gap-6">
          <ExperienceCard
            custom={0}
            company="Aza Fashions"
            title="Software Developer"
            location="Mumbai"
            duration="Dec 2023 - Present"
            link="https://www.azafashions.com"
            linkColor="text-green"
            techStack="Next JS, Typescript, ReactJS, Tailwind, Node JS"
            bullets={[
              "Contributed extensively to the <b>luxury e-commerce platform</b> by developing new screens and features (<b>Built 25+ features</b>).",
              "Led the <b>Checkout flow revamp</b>, to reduce friction and give out a resistance free experience which <b>reduced the drop-off rates by 23%</b>.",
              "Built <b>search feature</b> of our site with advanced personalization and recommendation logic, which <b>improved the click rates by 30%</b>.",
              "Optimized code for <b>Core Web Vitals</b>, improving LCP from 4s to 2s.",
            ]}
          />
          <ExperienceCard
            custom={1}
            company="Digital Innk"
            title="Software Developer"
            location="Remote"
            duration="Apr 2022 - Sept 2023"
            link="https://digitalinnk.com/"
            linkColor="text-green"
            techStack="React JS, Typescript, Node JS, Express, Firebase, Tailwind"
            bullets={[
              "Built <b>30+ fully functional features</b> across the product lifecycle — from planning to deployment.",
              "Reviewed <b>150+ major pull requests</b>, enhancing code quality and aligning with best practices.",
              "Resolved bugs across the stack, improving system stability and performance.",
              "Fostered strong team collaboration, contributing to timely and successful project deliveries.",
            ]}
          />
          <ExperienceCard
            custom={2}
            company="Noutsek Labs"
            title="Software Developer Intern"
            location="Remote"
            duration="Sept 2021 - Mar 2022"
            link="https://app-new.we-citizens.com/"
            linkColor="text-green"
            bullets={["Worked as a Software Developer Intern."]}
          />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <SkillsSection />
      </motion.div>

      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          How I spend my time to learn new things
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
