import { projectData } from "@/pages/api/projectData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <h3 className="font-bold">{project.title}</h3>
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  <a href={project.gitHubLink}>
                    <FontAwesomeIcon height={30} width={30} icon={faGithub} />
                  </a>
                </div>
              </div>

              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
