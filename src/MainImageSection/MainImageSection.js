import React from 'react'
import './MainImageSection.css'
import MainImage from '../Images/MainImage.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

function MainImageSection() {
    return (
        <div style={{background: '#f8f8f8'}}>
            <Container style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Row style={{justifyContent: 'center'}}>
                    <Col sm>
                        <Image src={MainImage} fluid />
                    </Col>

                    <Col sm style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Potta One', fontSize: '3.5rem', fontWeight: 'bold', color:'#ffdf6c' }}>QINMI</p>
                        <p style={{ fontFamily: 'Potta One', fontSize: '3.5rem', fontWeight: 'bold', color:'#ffdf6c' }}>note 8</p>
                        <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>THE FUTURE</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>From $300.00</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainImageSection
