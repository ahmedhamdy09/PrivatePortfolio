import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "./Banner.css";

export default function Banner() {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  // eslint-disable-next-line
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
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
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setloopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome To My Portfolio</span>
              <h1>
                {`Hi I'm Ahmed Hamdy`} <span className="wrap">{text}</span>
              </h1>
              <p>
                Front End Developer , Interested in learning web development,
                staying updated with the latest technologies in this field, i
                seek to a professional full-stack developer.
              </p>
              <a
                href="https://github.com/ahmedhamdy09"
                target="_blank"
                rel="noreferrer"
              >
                <button onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
