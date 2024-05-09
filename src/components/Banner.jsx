import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headshot.png";
import sujanCv from "../assets/sujan_cv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Java ", "Software ", "Full Stack "];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300 - Math.random() * 100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hello! This is Sujan</h1>
                  <h2 className="">
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                    {`Developer`}
                  </h2>
                  <p>
                    I'm a results-driven Software Developer based in Sydney, Australia, with a
                    passion for crafting robust solutions and embracing cutting-edge technologies.
                    With a Master's degree in Applied Information Technology and hands-on experience
                    in Java, .NET, JavaScript, and more, I thrive in dynamic environments where
                    innovation meets practicality. From optimizing software performance to
                    spearheading migration projects and contributing to enterprise-level
                    applications, I bring a versatile skill set honed through years of dedication
                    and continuous learning. Explore my portfolio to discover how I tackle
                    challenges and deliver impactful solutions in the ever-evolving landscape of
                    software development.
                  </p>
                  <a href={sujanCv} download={true}>
                    <button onClick={() => console.log("connect")}>
                      Download my CV <FaCloudDownloadAlt size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn d-flex justify-content-end"
                      : "d-flex justify-content-end "
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
