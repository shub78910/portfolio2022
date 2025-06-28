import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";

const Projects = () => {
  return (
    <div
      className="overflow-y-scroll px-5 py-2 projectsWrapper"
      style={{ height: "65vh" }}
    >
      <div className="grid relative grid-cols-12 gap-4 my-3">
        {projectsData.map((project, id) => (
          <div
            key={id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
