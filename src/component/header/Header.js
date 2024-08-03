import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import Web3Integration from '../../Web3Integration';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Jack Pot Magick</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav className=' w-100 d-flex align-items-center justify-content-end'>
            <Link to="/" style={{ textDecoration: "none" }}><Nav.Link href="#deets" className='nav-text'>Landing Page</Nav.Link></Link>
            <Link to="/tokenomics" style={{ textDecoration: "none" }}><Nav.Link href="#memes" className='nav-text'>Tokenomics</Nav.Link></Link>
            <Link to="/Whitepaper" style={{ textDecoration: "none" }}><Nav.Link href="#memes" className='nav-text'>Whitepaper</Nav.Link></Link>
            <Link to="/faq" style={{ textDecoration: "none" }}><Nav.Link href="#memes" className='nav-text me-4'>FAQ</Nav.Link></Link>
            <Web3Integration />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header