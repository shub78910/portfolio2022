import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <p className="my-3 text-base font-extrabold">
        <p>
          A <span className="text-green">Full stack Developer</span>, with
          proficient knowledge of the <span className="text-green">MERN</span>
          (MongoDB, ExpressJS, ReactJS, NodeJS) stack.
        </p>
        I am currently pursuing engineering (Final Year) in Computer Science
        from Pune university. I have been coding since a couple of years and
        have learnt to use the web technologies by building projects which
        intrigued me.
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
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
