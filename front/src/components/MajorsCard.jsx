import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCustomContext } from "../context/CustomContext";

const MajorsCard = ({ img, title, keyMaj, role }) => {
  const { grade, openModal } = useCustomContext();

  const id = grade + keyMaj;
  console.log(id);
  return (
    <Card style={{ width: "18rem", marginRight: "1rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{title}</Card.Title>
        <Link
          onClick={() => openModal()}
          style={{ textDecoration: "none", fontSize: "1rem", marginTop: "9px" }}
          to={role === "admin" ? `/admin/schedules/${id}` : `/majors/${id}`}
        >
          schedule
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MajorsCard;
