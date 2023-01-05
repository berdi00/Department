import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import MajorsCard from '../components/MajorsCard'
import { useCustomContext } from '../context/CustomContext'

const majors = [
  {
    key: 'auto',
    major: "Automation and Control",
    img: '/automation.jpg',
    id: 1
  },
  {
    key: 'mecha',
    major: "Mechatronics and Electronics",
    img: '/mechatronics.jpg',
    id: 2
  },
  {
    key: 'eco',
    major: "Digital Economy",
    img: '/digEc.jpg',
    id: 3
  }
]
const Majors = () => {
 
  const {grade, seTGrade} = useCustomContext()

  return (
    <Container className='my-4'>
      <h3 className='text-center mb-3'>Select your grade below: </h3>
      <Tabs
      onSelect={(k) => {seTGrade(k)}}
      activeKey={grade}
      id="controlled-tab-example"
      className="mb-3 d-flex justify-content-center align-items-center"
    >
      <Tab eventKey="first" title="First">
      </Tab>
      <Tab eventKey="second" title="Second">
      </Tab>
      <Tab eventKey="third" title="Third">
      </Tab>
      <Tab eventKey="fourth" title="Fourth">
      </Tab>
    </Tabs>
    <div className='d-flex justify-content-center'>
      {majors.map((maj) => (
      
        <MajorsCard img={maj.img} title={maj.major} key={maj.id} keyMaj={maj.key}/>
      ))}

    </div>
    <Outlet />
    </Container>
  )
}

export default Majors