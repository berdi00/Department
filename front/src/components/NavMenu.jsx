import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useCustomContext } from '../context/CustomContext'
import { engLinks } from '../data/navlinks'
import NavElements from './NavElements'
import classes from "./NavElements.module.css"

const NavMenu = () => {
    const {open, closeMenu} = useCustomContext()
  return (
    <Offcanvas style={{backgroundColor: "#141b29"}}  show={open} onHide={closeMenu} placement="top">
        <Offcanvas.Header className='bg-light' closeButton></Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column justify-content-around'>
            {engLinks.map((link) => (
                <NavElements className={classes.navElextra} key={link.id} name={link.name} to={link.link} />
            ))}
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default NavMenu