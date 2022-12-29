import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
const TeacherCard = ({name, status, room, img, subjects}) => {
  return (
    <Card style={{ width: '20rem', marginRight: "1rem", marginTop: "1rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
        <ListGroup variant="flush">
        <ListGroup.Item><span className='text-muted'>Room No: </span>{room}</ListGroup.Item>
        <ListGroup.Item><span>Subjects: </span>{subjects}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default TeacherCard