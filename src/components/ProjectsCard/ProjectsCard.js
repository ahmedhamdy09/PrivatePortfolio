import React from "react";
import { Col } from "react-bootstrap";

export default function ProjectsCard({
  title,
  description,
  imgUrl,
  locUrls,
  nameLinks,
}) {
  return (
    <>
      <Col sm={6} md={4}>
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={locUrls} target="_blank" rel="noreferrer">
            {nameLinks}
          </a>
        </div>
      </Col>
    </>
  );
}
