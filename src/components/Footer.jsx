import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sujan-bikram-thapa/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/thapaji" target="_blank">
                <FaGithub />
              </a>
              <a href="mailto:mail.thapasujan@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {" "}
            <p>&copy; Copyright 2024. All Rights Reserved <a href="#">&copy;Sujan</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
