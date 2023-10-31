import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Jameson's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://github.com/jamesonkunkel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon height={30} width={30} icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jameson-k-9a8b3893/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon height={30} width={30} icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
