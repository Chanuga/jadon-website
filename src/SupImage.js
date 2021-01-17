import React from 'react'
import Watch from './Images/blackwatch.jpg'
import { Button } from 'react-bootstrap';

function SupImage() {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={Watch} style={{ width: '100%', position: 'relative'}} />
            <div style={{position: 'absolute', marginLeft: '10vw', marginTop: '15vw', justifyContent: 'center' }}>
                <p style={{fontSize: '3.5vw', fontWeight: 'bold', color:'white'}}>High on features</p>
                <p style={{fontSize: '3.5vw', fontWeight: 'bold', color:'white'}}>Low on price</p>
                {/* <p style={{fontSize: '2vw', fontWeight: 'bold', color:'white'}}>From $300.00</p>
                <Button style={{marginTop: '1vw'}}>Learn more ></Button> */}
            </div>
        </div>
        </div>
    )
}

export default SupImage
