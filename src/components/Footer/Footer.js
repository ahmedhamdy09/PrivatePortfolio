import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import MailchimpForm from "../MailchimpForm/MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            {/* <MailchimpForm /> */}
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-iconTwo">
                <a
                  href="https://www.linkedin.com/in/ahmed-hamdy-a87a651ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a
                  href="https://web.facebook.com/ana.henkesh.92/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a
                  href="https://www.instagram.com/ahmedhamdy_0989/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <h5>Call Me.</h5>
              <a
                href="01092355899"
                rel="noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                01092355899
              </a>
              <p>Copyright 2023. All Rights Reserved: Ahmed Hamdy</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
