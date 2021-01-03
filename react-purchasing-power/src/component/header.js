import React from 'react'
import { Link } from '@reach/router'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { FaHamburger } from 'react-icons/fa'

export default function Header() {

    return (
      <Navbar bg="dark" variant="dark" fixed="top" id="nav-top">
        <Container>
          <Link className="navbar-brand" to="/">Comparador de poder de compra |</Link>
          <Nav className="ml-auto">
            <NavDropdown title={ <FaHamburger /> } id="navbarDropdownMenuLink">
              <NavDropdown.Item href="#compare"> Comparador </NavDropdown.Item>
              <NavDropdown.Item href="#ppp"> Poder de Compra </NavDropdown.Item>
              <NavDropdown.Item href="#bmi"> Big Mac Index </NavDropdown.Item>
              <NavDropdown.Item href="#brasil"> Brasil </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    )
}