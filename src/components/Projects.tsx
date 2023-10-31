import { projectData } from "@/pages/api/projectData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  <a href={project.gitHubLink}>
                    <FontAwesomeIcon height={30} width={30} icon={faGithub} />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
