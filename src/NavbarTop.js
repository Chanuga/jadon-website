import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function NavbarTop() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{ background: '#202020' }}>
                <Navbar.Brand href="#home">QINMI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarTop
