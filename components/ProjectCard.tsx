import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
      >
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => {
            setShowDetail(true);
            document.querySelector(".projectsWrapper").scroll(0, 0);
          }}
          layout="responsive"
          height="150"
          width="250"
          objectFit="cover"
        />
        <p className="my-2 text-center">{name}</p>
      </motion.div>
      {showDetail && (
        <div className="grid absolute top-0 left-0 z-10 gap-x-12 p-2 w-full h-auto text-black bg-gray-100 md:grid-cols-2 dark:text-white dark:bg-dark-100">
          <div>
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="250"
              objectFit="cover"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Live project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
