import React from 'react'
import { Container } from 'react-bootstrap'
import TeacherCard from '../components/TeacherCard'
import teachData from "../data/teachersData.json"

const Teachers = () => {
  console.log(teachData)
  return (
    <Container className='d-flex flex-wrap my-5 align-items-center justify-content-center bg-light'>
      {teachData.map((data) => <TeacherCard key={data.id} id={data.id} status={data.status} name={data.name} room={data.roomNum} img={data.img} subjects={data.subjects}  />)}
    </Container>
  
  )
}

export default Teachers