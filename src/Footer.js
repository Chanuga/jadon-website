import React from 'react'
import { Navbar } from 'react-bootstrap';

function Footer() {

    const Year = new Date()
    console.log("year", Year.getFullYear())

    return (
        <div>
            <Navbar variant="dark" style={{background: '#202020'}}>
                <Navbar.Brand href="#home">
                    QINMI
                </Navbar.Brand>
                <Navbar.Brand>
                    <span>&#169;</span> {` ${Year.getFullYear()}`}
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Footer 
