import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, and am currently focused on web
            technologies. I enjoy working on both the front-end and back-end of
            applications, and I am always looking for ways to optimize
            performance, improve user experience, and ensure the highest level
            of code quality.
          </p>
          <p>
            I enjoy applying mathematical and computational concepts to solve
            and model different problems. During graduate school I developed a
            passion for modelling biological processes using mathematics and
            computer simulations.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/about.jpeg"
            alt=""
            className="profile-img"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
