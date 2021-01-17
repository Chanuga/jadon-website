import React from 'react'
import heart from '../Images/heart.svg'
import play_button from '../Images/play-button.svg'
import whatsapp from '../Images/whatsapp.svg'
import gps from '../Images/gps.svg'
import refresh from '../Images/refresh.svg'
import banknote from '../Images/banknote.svg'
import { Figure, Container, Row, Col } from 'react-bootstrap';

function DetailsSection() {
    return (
        <div style={{ background: '#202020', display: 'flex', flexDirection: 'row', justifyContent: 'center', color: '#ffffff' }}>

            <Container style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Row>
                    <p style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', margin: '50px', textAlign: 'center', color:'#ffdf6c' }}>You will get everything on your wrist with QINMI</p>
                </Row>
                <Row style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}> 
                            <Figure.Image
                                style={{justifyContent: 'center', alignItems: 'center', textAlign:'center'}}
                                width={100}
                                height={100}
                                alt="heart"
                                src={heart}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Healthy
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    
                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="play_button"
                                src={play_button}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Happily
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="whatsapp"
                                src={whatsapp}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Connected
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="gps"
                                src={gps}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Directed
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="refresh"
                                src={refresh}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Updated
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    <Col sm style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px'}}>
                        <Figure style={{margin: '5px', justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="banknote"
                                src={banknote}
                            />
                            
                            <Figure.Caption style={{color:'#ffdf6c'}}>
                                Welthy
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default DetailsSection
