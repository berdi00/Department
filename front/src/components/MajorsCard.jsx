import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCustomContext } from '../context/CustomContext'


const MajorsCard = ({img, title, keyMaj}) => {

    const {grade, openModal} = useCustomContext()

    const id = grade + keyMaj
    console.log(id)
  return (
    <Card style={{ width: '18rem', marginRight: "1rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link onClick={() => openModal()} to={`/majors/${id}`}>see schedule</Link>
      </Card.Body>
    </Card>
  )
}

export default MajorsCard