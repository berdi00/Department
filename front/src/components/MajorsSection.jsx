import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const MajorsSection = () => {
  return (
    <Container className='my-5 '>
      <hr style={{borderTop: "8px solid #15265c", borderRadius: "5px"}}/>
      <h1 className='text-center my-4'>MAJORS</h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/digEc.jpg"
          alt="Digital economy"
          style={{filter: "brightness(50%"}}
        />
        <Carousel.Caption>
          <h1>Digital Economy</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/automation.jpg"
          alt="Automation"
          style={{filter: "brightness(50%"}}
        />

        <Carousel.Caption>
          <h1>Automation and Control</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/mechatronics.jpg"
          alt="Mechatronics and robotics"
          style={{filter: "brightness(50%"}}
        />

        <Carousel.Caption>
          <h1>Mechatronics and robotics</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default MajorsSection