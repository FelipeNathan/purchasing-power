import React from 'react'
import { Link } from '@reach/router'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaHamburger } from 'react-icons/fa'

export default function Header() {

    return (
      <Navbar bg="dark" variant="dark" expand={ false } fixed="top" id="nav-top">
        <Container>
          <Link className="navbar-brand" to="/">Purchasing Power</Link>
          <Navbar.Toggle aria-controls="collapsedMenu">
            <FaHamburger />
          </Navbar.Toggle>
          <Navbar.Collapse id="collapsedMenu">
            <Nav className="ml-auto">
              <Nav.Link href="#compare"> Comparador </Nav.Link>
              <Nav.Link href="#ppp"> Poder de Compra </Nav.Link>
              <Nav.Link href="#bmi"> Big Mac Index </Nav.Link>
              <Nav.Link href="#brasil"> Brasil </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}