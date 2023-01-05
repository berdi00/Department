import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import classes from "./NavElements.module.css"
const NavElements = ({to, name}) => {
  return (
    <Nav.Item className='mx-3'>
        <NavLink className={classes.navEl} to={to}>{name}</NavLink>
    </Nav.Item>
  )
}

export default NavElements