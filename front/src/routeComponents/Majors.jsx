import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MajorsCard from "../components/MajorsCard";
import { useCustomContext } from "../context/CustomContext";

const majors = [
  {
    key: "auto",
    major: "Automation and Control",
    img: "/automation.jpg",
    id: 1,
  },
  {
    key: "mecha",
    major: "Mechatronics and Electronics",
    img: "/mechatronics.jpg",
    id: 2,
  },
  {
    key: "eco",
    major: "Digital Economy",
    img: "/digEc.jpg",
    id: 3,
  },
];
const Majors = ({ role }) => {
  const { grade, seTGrade } = useCustomContext();

  return (
    <Container className="my-4">
      <h4 className="text-center mb-3">
        {role === "admin"
          ? "Select grade's schedule which you would like to update"
          : "Select grade below to see schedule of"}{" "}
      </h4>
      <Tabs
        onSelect={(k) => {
          seTGrade(k);
        }}
        activeKey={grade}
        id="controlled-tab-example"
        className="mb-3 d-flex justify-content-center align-items-center"
      >
        <Tab eventKey="first" title="First"></Tab>
        <Tab eventKey="second" title="Second"></Tab>
        <Tab eventKey="third" title="Third"></Tab>
        <Tab eventKey="fourth" title="Fourth"></Tab>
      </Tabs>
      <div className="d-flex justify-content-center">
        {majors.map((maj) => (
          <MajorsCard
            role={role}
            img={maj.img}
            title={maj.major}
            key={maj.id}
            keyMaj={maj.key}
          />
        ))}
      </div>
      <Outlet />
    </Container>
  );
};

export default Majors;
