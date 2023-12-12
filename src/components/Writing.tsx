import { writingData } from "@/pages/api/writingData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";

function Writing() {
  return (
    <div className="projects-container">
      <h2>Writing</h2>
      <div className="projects-grid">
        {writingData &&
          writingData.map((article) => (
            <div className="project-card" key={article.id}>
              <div className="project-header">
                <h3 className="font-bold">{article.title}</h3>
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  <a href={article.link}>
                    <FontAwesomeIcon height={30} width={30} icon={faDev} />
                  </a>
                </div>
              </div>

              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Writing;
