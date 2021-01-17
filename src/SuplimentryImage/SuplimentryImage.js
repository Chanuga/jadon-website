import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TwoWatches from '../Images/twowatches.jpg'

function SuplimentryImage() {
    return (
        <div style={{background:'#000000'}}>
            <Container>
                <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <Col sm style={{margin: '30px 0px 30px 0px'}}>
                        <Image src={TwoWatches} fluid />
                    </Col>
                    <Col sm style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{ fontFamily: 'Potta One', fontSize: '3.5rem', fontWeight: 'bold', color:'#ffdf6c' }}>QINMI</p>
                        <p style={{ fontSize: '3.5rem', fontWeight: 'bold', color:'#ffdf6c', textAlign:'center' }}>High on features</p>
                        <p style={{ fontSize: '3.5rem', fontWeight: 'bold', color:'#ffdf6c', textAlign:'center' }}>Low on price</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuplimentryImage
