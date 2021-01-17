import React, {useState} from 'react'
import MiddleEmptyWatch from '../Images/MiddleEmptyWatch.jpg'
import SS1 from '../Images/SS1.jpg'
import SS2 from '../Images/SS2.jpg'
import SS3 from '../Images/SS3.jpg'
import { Container, Row, Col, Image, Figure } from 'react-bootstrap'

function ContentChangingImage() {

    // const [isShown, setIsShown] = useState(false);
    const [arrayOfImages, setArrayOfImages] = useState([SS1, SS2, SS3])
    const [selectedImage, setSelectedImage] = useState(0)

    const changeColor = (index) => {
        setSelectedImage(index)
    }

    return (
        <div>
            <Container >
                <Row>
                    <Col sm style={{  }}>
                        <Row 
                        // onMouseEnter={() => setIsShown(true)}
                        //     onMouseLeave={() => setIsShown(false)}
                            onMouseOver={() => changeColor(0)}>
                            You will get everything on your wrist with QINMI
                        </Row>
                        <Row 
                        // onMouseEnter={() => setIsShown(true)}
                        //     onMouseLeave={() => setIsShown(false)}
                            onMouseOver={() => changeColor(1)}>
                            You will get everything on your wrist with QINMI
                        </Row>
                        <Row 
                        // onMouseEnter={() => setIsShown(true)}
                        //     onMouseLeave={() => setIsShown(false)}
                            onMouseOver={() => changeColor(2)}>
                            You will get everything on your wrist with QINMI
                        </Row>
                    </Col>

                    <Col sm style={{background: '#151515', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {/* <Image src={MiddleEmptyWatch} style={{position: 'absolute'}} fluid /> */}
                        {
                            // <Figure style={{marginTop: '-200px'}}>
                            //     <Figure.Image
                            //         width={120}
                            //         height={120}
                            //         alt="heart"
                            //         src={SS1}
                            //     />
                            // </Figure>
                            <Image src={arrayOfImages[`${selectedImage}`]} fluid/>
                        }
                    </Col>

                    <Col sm style={{}}>
                        {/* <Row onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                            You will get everything on your wrist with QINMI
                        </Row>
                        <Row onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                            You will get everything on your wrist with QINMI
                        </Row>
                        <Row onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                            You will get everything on your wrist with QINMI
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContentChangingImage
