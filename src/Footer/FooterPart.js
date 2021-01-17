import React from 'react'
import { Container, Figure, Row, Col } from 'react-bootstrap'
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
import pinterest from '../Images/pinterest.svg'
import twitter from '../Images/twitter.svg'

function Footer() {

    const Year = new Date()
    const exactYear = Year.getFullYear()
    console.log("year", Year.getFullYear())

    return (
        <div style={{background: '#202020'}} >
            <Container>
                <Row>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'20px'}}>
                        <Figure style={{ margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <a href="https://www.facebook.com/" target="_blank">
                            <Figure.Image
                                style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                                width={50}
                                height={50}
                                alt="facebook"
                                src={facebook}
                            />
                            </a>
                        </Figure>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'20px'}}>
                        <Figure style={{ margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <a href="https://www.instagram.com/" target="_blank">
                            <Figure.Image
                                style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                                width={50}
                                height={50}
                                alt="instagram"
                                src={instagram}
                            />
                            </a>
                        </Figure>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'20px'}}>
                        <Figure style={{ margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <a href="https://www.pinterest.com/" target="_blank">
                            <Figure.Image
                                style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                                width={50}
                                height={50}
                                alt="pinterest"
                                src={pinterest}
                            />
                            </a>
                        </Figure>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'20px'}}>
                        <Figure style={{ margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <a href="https://twitter.com/tweeter?lang=en" target="_blank">
                            <Figure.Image
                                style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                                width={50}
                                height={50}
                                alt="twitter"
                                src={twitter}
                            />
                            </a>
                        </Figure>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <a href="https://twitter.com/tweeter?lang=en" target="_blank">
                        <p style={{color:'#ffdf6c', textDecoration: 'none'}}>About Us</p>
                        </a>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <a href="https://twitter.com/tweeter?lang=en" target="_blank">
                        <p style={{color:'#ffdf6c'}}>Contact Us</p>
                        </a>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <a href="https://twitter.com/tweeter?lang=en" target="_blank">
                        <p style={{color:'#ffdf6c'}}>Retailers</p>
                        </a>
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <a href="https://twitter.com/tweeter?lang=en" target="_blank">
                        <p style={{color:'#ffdf6c'}}>Help</p>
                        </a>
                    </Col>
                </Row>
                <Row style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                    <p style={{textAlign: 'center', color:'#ffdf6c'}}><span style={{color: '#ffdf6c'}}>&#169;</span>{exactYear} QINMI. All rights reserved.</p>
                </Row>
                <Row style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                    <p style={{textAlign: 'center', color:'#ffdf6c'}}>Chanuga Jayathilaka</p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
