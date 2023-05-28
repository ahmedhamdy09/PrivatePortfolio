import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./Projects.css";
import Nav from "react-bootstrap/Nav";
import imgpro1 from "../../assets/img/filter.png";
import imgpro2 from "../../assets/img/pro2.png";
import imgpro3 from "../../assets/img/pro3.png";
import imgpro4 from "../../assets/img/pro4.png";
import imgpro5 from "../../assets/img/pro5.png";
import imgpro6 from "../../assets/img/pro6.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import StartResReact from "../../assets/img/dorsinReact.png";
import todoListReact from "../../assets/img/todolistReact.png";
import { url1, url2, url3, url4, url5, url6, url7, url8 } from "./LinkUrls";
import TrackVisibility from "react-on-screen";

export default function Projects() {
  const Projects = [
    {
      title: "filter-Photos-HTML-CSS-JS",
      description: "filter-Photos-HTML-CSS-JS-Only",
      imgUrl: imgpro1,
      locUrls: url1,
      nameLinks: "Filter",
    },
    {
      title: "e-commerce-Html-Css-js-Only",
      description: "e-commerce-Html-Css-js-Only",
      imgUrl: imgpro2,
      locUrls: url2,
      nameLinks: "E-Commerce",
    },
    {
      title: "portfolio-basic-html-css",
      description: "portfolio-basic-html-css",
      imgUrl: imgpro3,
      locUrls: url3,
      nameLinks: "Portfolio-Basic",
    },
    {
      title: "alien-scss",
      description: "alien-scss",
      imgUrl: imgpro4,
      locUrls: url4,
      nameLinks: "Alien",
    },
    {
      title: "Bondi-theme",
      description: "Bondi-theme",
      imgUrl: imgpro5,
      locUrls: url5,
      nameLinks: "Bondi",
    },
    {
      title: "Responsive-website",
      description: "Responsive-website",
      imgUrl: imgpro6,
      locUrls: url6,
      nameLinks: "Responsive-WebSite",
    },
    {
      title: "Help-Company-StartUp-React",
      description: "Help-Company-StartUp-React",
      imgUrl: StartResReact,
      locUrls: url7,
      nameLinks: "Help-Company-StartUp",
    },
    {
      title: "TodoList-React",
      description: "TodoList-React",
      imgUrl: todoListReact,
      locUrls: url8,
      nameLinks: "TodoList",
    },
  ];

  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      I have built some sites using Html, Css, Bootstrap, Js,
                      Sass and ReactJs. There are some complete sites There are
                      some incomplete sites because I am still in training and I
                      am still a Junior front end.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justifu-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab There</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {Projects.slice(0, 6).map((project, index) => {
                              return <ProjectsCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {Projects.slice(6, 12).map((project, index) => {
                              return <ProjectsCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {Projects.slice(12, 18).map((project, index) => {
                              return <ProjectsCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

        <img
          className="background-image-right"
          src={colorSharp2}
          alt="Alternative Text"
        />
      </section>
    </>
  );
}
