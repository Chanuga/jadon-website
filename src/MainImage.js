import React from 'react'
import Watch from './Images/watchCroped.jpg'
import './MainImage.css';
import { Button, Image } from 'react-bootstrap';

function MainImage() {

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* <img src={Watch} style={{ width: '100%', position: 'relative'}} /> */}
            {/* <Image src={Watch} fluid /> */}
            <div style={{position: 'absolute', marginLeft: '60vw', marginTop: '12vw', justifyContent: 'center' }}>
                <p style={{fontSize: '3.5vw', fontWeight: 'bold'}}>The future is</p>
                <p style={{fontSize: '3.5vw', fontWeight: 'bold'}}>on your wrist now.</p>
                <p style={{fontSize: '2vw', fontWeight: 'bold'}}>From $300.00</p>
                {/* <Button style={{marginTop: '1vw'}}>Learn more</Button> */}
            </div>
        </div>
    )
}

export default MainImage
