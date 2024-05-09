import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolio from "../assets/img/Portfolio.png";
import bucketList from "../assets/img/bucket-list.png";
import weatherApp from "../assets/img/weather-app.png";
import ntdl from "../assets/img/ntdl.png";
import jobSafari from "../assets/img/job-safari.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
    },
    {
      title: "Transaction Recorder",
      description: "Record The Day To Day Transactions",
      imgUrl: bucketList,
    },
    {
      title: "Bucket List",
      description:
        "Do you have something you want to do? Record it here tick when its done. Track you list anytime anywhere.",
      imgUrl: bucketList,
    },
    {
      title: "ProductivityPilot",
      description: "Track what to do and what is killing your time.",
      imgUrl: ntdl,
    },
    {
      title: "Weather App",
      description: "View the weather of any city.",
      imgUrl: weatherApp,
    },
    {
      title: "Job Safari",
      description: "Embark on a journey to discover new career adventures.",
      imgUrl: jobSafari,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Welcome to my projects! Here, you'll see a collection of my different projects,
                    each show casing my dedication and skills. From newbie in MERN Stack development
                    to Confident web developer, I've gained a lot of experience. It's all about
                    facing challenges with creativity and accuracy. Take a look around and see the
                    result of my passion and hard work!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">MERN STACK</Nav.Link>
                      </Nav.Item>

                      {/* Tabs for future
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__bounce" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                          neque provident velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
                          debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                          neque provident velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
                          debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
