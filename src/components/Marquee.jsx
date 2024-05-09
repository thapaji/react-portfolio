import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaTerminal, FaJava, FaPython, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiExpress, SiSpring, SiRedux } from "react-icons/si";
import { DiMongodb, DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";

export const Marquee = () => {
    return (
        <Container className="marquee-container">
          <Row className="marquee-right">
            <Col>
              <FaHtml5 />
              <h5>HTML 5</h5>
            </Col>
            <Col>
              <FaCss3 />
              <h5>CSS 3</h5>
            </Col>
            <Col>
              <FaJs />
              <h5>Javascript</h5>
            </Col>
            <Col>
              <FaTerminal />
              <h5>C/C++</h5>
            </Col>
            <Col>
              <FaJava />
              <h5>Java</h5>
            </Col>
            <Col>
              <SiDotnet />
              <h5>.net</h5>
            </Col>
            <Col>
              <FaPython />
              <h5>Python</h5>
            </Col>
            <Col>
              <FaReact />
              <h5>React</h5>
            </Col>
            <Col>
              <FaBootstrap />
              <h5>Bootstrap</h5>
            </Col>
            <Col>
              <RiTailwindCssFill />
              <h5>Tailwind Css</h5>
            </Col>
            
            
          </Row>
          <Row className="marquee-left">
            <Col>
              <FaGitAlt />
              <h5>Git</h5>
            </Col>
            <Col>
              <TbWorldWww />
              <h5>Web Development</h5>
            </Col>
            <Col>
              <VscDebugAlt />
              <h5>Debugging</h5>
            </Col>
            <Col>
              <SiRedux />
              <h5>Redux</h5>
            </Col>
            <Col>
              <SiSpring />
              <h5>SpringBoot</h5>
            </Col>
            <Col>
              <DiMsqlServer />
              <h5>Ms Sql Server</h5>
            </Col>
            <Col>
              <BiLogoPostgresql />
              <h5>PosGre SQL</h5>
            </Col>
            <Col>
              <DiMongodb />
              <h5>Mongo DB</h5>
            </Col>
            <Col>
              <SiExpress />
              <h5>Express</h5>
            </Col>
            <Col>
              <FaReact />
              <h5>React</h5>
            </Col>
            <Col>
              <FaNode />
              <h5>Node</h5>
            </Col>
          </Row>
        </Container>
      );
};