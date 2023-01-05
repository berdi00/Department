import React from 'react'
import { Container } from 'react-bootstrap'

const Intro = () => {
  return (
    
    <Container className='d-flex align-items-center justify-content-between' style={{width: "100%", height: "100vh"}}>
        <h1 style={{color: "#fff", textAlign: "center"}}>Cyberphysical Systems Department</h1>
        <div className='align-self-end'><img src="/cyber.png" alt="logo" /></div>
    </Container>
    
  )
}

export default Intro