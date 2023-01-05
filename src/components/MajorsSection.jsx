import React from "react";
import { Container, Carousel } from "react-bootstrap";

const MajorsSection = () => {
  return (
    <Container className="my-5 ">
      <hr style={{ borderTop: "8px solid #15265c", borderRadius: "5px" }} />
      <h1 className="text-center my-4">MAJORS</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/digEc.jpg"
            alt="Digital economy"
            style={{ filter: "brightness(50%" }}
          />
          <Carousel.Caption>
            <h1>Digital Economy</h1>
            <p className="fs-4">
              It is a portmanteau of digital computing and economy, and is an
              umbrella term that describes how traditional brick-and-mortar
              economic activities (production, distribution, trade) are being
              transformed by Internet, World Wide Web, and blockchain
              technologies.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/automation.jpg"
            alt="Automation"
            style={{ filter: "brightness(50%" }}
          />

          <Carousel.Caption>
            <h1>Automation and Control</h1>
            <p className="fs-4">
              {" "}
              It is a branch of engineering which develops and implements
              information and technology providing electrical, electronic,
              mechanical and computer-based all industrial systems to work
              intended and planned manner.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/mechatronics.jpg"
            alt="Mechatronics and robotics"
            style={{ filter: "brightness(50%" }}
          />

          <Carousel.Caption>
            <h1>Mechatronics and robotics</h1>
            <p className="fs-4">
              It is the combination of mechanical, electrical and computer
              engineering in the design of products and manufacturing processes.
              Robotics is a subset of mechatronics – all robots are mechatronic
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MajorsSection;
