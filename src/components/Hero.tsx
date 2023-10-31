import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpg"
        priority={true}
        className="profile-img"
        width={200}
        height={200}
        alt="headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Jameson 👋</h1>
        <p>
          I'm a software developer based in Waterloo, Canada. I specialize in
          full stack web development using technologies like React, and node.js.
        </p>

        <div className="social-icons">
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
    </div>
  );
};

export default Hero;
