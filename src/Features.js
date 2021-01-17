import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import watchblack from './Images/watch black.jpg'


function Features() {
    return (
        <div style={{ background: '#707070' }}>
            <Container>
                <Row >
                    {/* <Col sm><img src={watchblack} style={{ width: '100%' }} /></Col> */}
                    <Col sm style={{ margin: '10px' }}>
                        {/* <Alert variant='secondary'>
                            Communicate With Your Kids
                        </Alert> */}
                        <Alert variant='secondary'>
                            Talk to your child and
                            let them talk to you and your loved ones anytime, anywhere. Your child can call, text, send photos
                            and voice messages to friends, grandparents, aunts, uncles and cousins.
                        </Alert>
                        <Alert variant='secondary'>
                            See your child's
                            location on a map at any time, set safe zones, SOS button lets you know if they need help.
                        </Alert>
                        <Alert variant='secondary'>
                            Take photos, you can set up
                            times stop it disturbing school times, keep track of how active your child is and create and set up
                            alarms.
                        </Alert>
                        <Alert variant='secondary'>
                            Easy to use, waterproof
                            up to 1 metre depth for 30 minutes, customisable for a cool new look and settings controlled by
                            parents from iOS/Android compatible App.
                        </Alert>
                        <Alert variant='secondary'>
                            Easy to use, waterproof
                            up to 1 metre depth for 30 minutes, customisable for a cool new look and settings controlled by
                            parents from iOS/Android compatible App.
                        </Alert>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Features
