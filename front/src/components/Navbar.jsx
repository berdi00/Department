import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Nav, Navbar as Navbarbs } from 'react-bootstrap'
import NavElements from './NavElements'
import { engLinks } from '../data/navlinks'
import { useCustomContext } from '../context/CustomContext';
const Navbar = () => {
    const {openMenu} = useCustomContext()
  return (
    <Navbarbs sticky="top" style={{backgroundColor: "#141b29"}}>
        <Container  className='d-flex justify-content-between'>
            <h4 style={{color: "white",}} className="my-auto">TITU</h4>
            <Nav className='d-none d-md-flex'>
                {engLinks.map((link) => (
                    <NavElements to={link.link} key={link.id} name={link.name} />
                ))}
            </Nav>
            <MenuIcon onClick={() => openMenu()} className='d-block d-md-none bg-light' />
        </Container>
    </Navbarbs>
  )
}

export default Navbar