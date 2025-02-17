import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-box">
                <h2>Skills</h2>
                <p>
                  Hello, I am a student at the Faculty of Computers and
                  Information, Suez Canal University. I am studying in the
                  Information System Department.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="description" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="description" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="description" />
                    <h5>JavaScribt</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="description" />
                    <h5>Bootsrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="description" />
                    <h5>ReactJs</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="Alternative Text"
        />
      </section>
    </>
  );
}
