import React,{useState} from 'react'
import BlueWatch from '../Images/BlueWatch.jfif'
import GreenWatch from '../Images/GreenWatch.jfif'
// import BlackWatch from '../Images/BlackWatch.jfif'
// import RedWatch from '../Images/RedWatch.jfif'
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap'

function ImageArray() {

    const [arrayOfImages, setArrayOfImages] = useState([BlueWatch, GreenWatch])
    const [selectedImage, setSelectedImage] = useState(0)
    const [showMpreDetails, setShowMpreDetails] = useState(false)

    const changeColor = (index) => {
        setSelectedImage(index)
    }

    const showMoreDetails = () => {
        if(showMpreDetails == false){
            setShowMpreDetails(true)
        } else {
            setShowMpreDetails(false)
        }
        
    }

    return (
        <div style={{background: '#ffffff'}}>
            <Container style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Row style={{margin: '10px'}}>
                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <Row>
                            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color:'#ffdf6c' }}>QINMI can be customized</p>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" style={{width: '4rem', height: '4rem', borderRadius: '50%'}} onClick={() => changeColor(0)}/>
                            </Col>
                            <Col>
                                <Button variant="success" style={{width: '4rem', height: '4rem', borderRadius: '50%'}} onClick={() => changeColor(1)}/>
                            </Col>
                            {/* <Col>
                                <Button variant="dark" onClick={() => changeColor(2)}>Black</Button>
                            </Col> */}
                            {/* <Col>
                                <Button variant="danger" onClick={() => changeColor(2)}>Red</Button>
                            </Col> */}
                        </Row>
                    </Col>

                    <Col sm style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:'10px'}}>
                        <Image src={arrayOfImages[`${selectedImage}`]} fluid />
                    </Col>
                </Row>
                <Row>
                    {showMpreDetails == true && (
                        // <h1>Show details</h1>
                        <Col>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>See your child's location on a map at any time, set safe zones, SOS button lets you know if they need help.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Take photos, you can set up times stop it disturbing school times, keep track of how active your child is and create and set up alarms.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Easy to use, waterproof up to 1 metre depth for 30 minutes, customisable for a cool new look and settings controlled by parents</p><p> from iOS/Android compatible App.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Using the Local 4G Network.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Talk to your child, let them talk to you. Anytime. Anywhere.The kid's smart watch phone allows your child to make and receive calls from a parent controlled contact list. You decide who your child can call or be called by; granny and grandad yes, but no strangers.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Two way video calling from the Watch and the Leefine App, The phone watch can make and receive video calls between the watch and the Leefine App,adding an extra dimensions of fun.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Keep in touch with your child with text and voice messages.The smart watch can receive voice, text & emojis messages, as well as sending voice messages and emojis. Using a parent controlled contact list, you and your child can quickly communicate without calling.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>The Smart phone watch has a built in camera which allows your kids to take photos that they can then share with their loved ones.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Keep track of how active your child is.Know your kid&#39;s steps through the Pedometer feature on your Smart Phone Watch, and easily set up goals for them to achieve.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Let your child play in the water without any worries.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Easily flick through the watch&#39;s screen.Intuitive touch screen displays allows kids to quickly and easily navigate through the menu options.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Track your child at any time. Anywhere in the world.Using the Leefine app, you can see your child's location on a map at any time, anywhere in the world. Featuring full GPS Tracking, even if your kid is travelling overseas, you can still check their location.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Create Safe Zones to keep your child safe.Make your home, school and any other places you want into Safe Zones and know immediately when your child leaves them.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Know if your child is in distress.In an emergency your child can simply press an SOS button to let you know they need help, and the watch automatically calls the emergency contact setup within the App.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Watch doesn&#39;t disturb class times.Set up times when watch can&#39;t receive calls to stop it disturbing school times, or being a distraction.</p>
                            </Alert>
                            <Alert variant='dark' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                <p>Make sure you child doesn&#39;t miss anything again.Create and set up alarms, to easily remind your kids of specific events/duties.</p>
                            </Alert>
                        </Col>
                    )}
                </Row>
                <Row style={{marginBottom: '30px', display: 'flex', flexDirection:'row', justifyContent:'center'}}>
                    <Button onClick={showMoreDetails}>{showMpreDetails ? 'Show Less' : 'More Details'}</Button>
                </Row>
            </Container>
        </div>
    )
}

export default ImageArray
