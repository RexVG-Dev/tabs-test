import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
 
const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand>
        <Link to="/" className="nav-link">Home</Link>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav><Link className="nav-link" to="/general-background">Antecedentes Generales</Link></Nav>
        <Nav><Link className="nav-link" to="/progress-report">Detalle de Estado de Avance</Link></Nav>
      </Nav>
      </Container>
    </Navbar>
  )
 }

 export default Header;