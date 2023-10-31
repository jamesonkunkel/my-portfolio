import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <FontAwesomeIcon height={30} width={30} icon={faHtml5} />
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <FontAwesomeIcon height={30} width={30} icon={faCss3} />
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <FontAwesomeIcon height={30} width={30} icon={faJs} />
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <FontAwesomeIcon height={30} width={30} icon={faReact} />
          <p>React</p>
        </div>
        <div className="skill-card node">
          <FontAwesomeIcon height={30} width={30} icon={faNodeJs} />
          <p>Node</p>
        </div>
        <div className="skill-card python">
          <FontAwesomeIcon height={30} width={30} icon={faPython} />
          <p>Python</p>
        </div>
        <div className="skill-card java">
          <FontAwesomeIcon height={30} width={30} icon={faJava} />
          <p>Java</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
