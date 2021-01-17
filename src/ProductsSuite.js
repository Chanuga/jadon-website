import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Watch from './Images/watchbown.jpg'

function productsSuite() {
    return (
        <div style={{backgroundColor: '#f8f8f8'}}>
            <Container >
                <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '3.5vw', display: 'flex', justifyContent: 'center'}}>Which QINMI watch is suitable for you?</p>
                <Row>
                    <Col sm>
                        <img src={Watch} style={{ width: '100%', position: 'relative'}} />
                        <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5vw', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>QINMI Watch Series Z</p>
                        <p> - From $490.00</p>
                        <p> - 44mm or 40mm case size</p>
                        <p> - GPS + Cellular1 GPS</p>
                        <p> - Blood Oxygen app2</p>
                        <p> - ECG app3</p>
                        <p> - High and low heart rate notifications Irregular heart rhythm notification4</p>
                        <p> - Water resistant to 50 metres</p>
                    </Col>
                    <Col sm>
                    <img src={Watch} style={{ width: '100%', position: 'relative'}} />
                        <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5vw', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>QINMI Watch Series Y</p>
                        <p> - From $390.00</p>
                        <p> - 44mm or 40mm case size</p>
                        <p> - GPS + Cellular1 GPS</p>
                        <p> - None</p>
                        <p> - None</p>
                        <p> - High and low heart rate notifications Irregular heart rhythm notification4</p>
                        <p> - Water resistant to 50 metres</p>
                    </Col>
                    <Col sm>
                    <img src={Watch} style={{ width: '100%', position: 'relative'}} />
                        <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '1.5vw', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>QINMI Watch Series X</p>
                        <p> - From $290.00</p>
                        <p> - 44mm or 40mm case size</p>
                        <p> - GPS</p>
                        <p> - None</p>
                        <p> - None</p>
                        <p> - High and low heart rate notifications Irregular heart rhythm notification4</p>
                        <p> - Water resistant to 50 metres</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default productsSuite
