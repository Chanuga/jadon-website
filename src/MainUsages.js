import React from 'react'
import dumbbell from './Images/dumbbell.png'
import lightbulb from './Images/lightbulb.png'
import bluetooth from './Images/bluetooth.png'
import family from './Images/family.png'
import { Card, CardDeck } from 'react-bootstrap';

function MainUsages() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',  background: '#202020'}}>
            {/* <CardDeck style={{ margin: '10px', backgroundColor: '#3f3f3f'}}>
                <Card style={{ margin: '10px'}}>
                    <Card.Title>Components</Card.Title>
                </Card>
            </CardDeck> */}
            <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '3.5vw', display: 'flex', justifyContent: 'center', color: '#ffdf6c'}}>You will get everything on your wrist with QINMI</p>
            <CardDeck style={{ margin: '10px'}}>
                <Card style={{ margin: '10px'}}>
                    {/* <Card.Img variant="top" src={dumbbell} /> */}
                    <Card.Body>
                        <Card.Title>Fitness</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin: '10px'}}>
                    {/* <Card.Img variant="top" src={lightbulb} /> */}
                    <Card.Body>
                        <Card.Title>Business</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin: '10px'}}>
                    {/* <Card.Img variant="top" src={bluetooth} /> */}
                    <Card.Body>
                        <Card.Title>Gadget Lovers</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ margin: '10px'}}>
                    {/* <Card.Img variant="top" src={family} /> */}
                    <Card.Body>
                        <Card.Title>Family</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div >
    )
}

export default MainUsages
