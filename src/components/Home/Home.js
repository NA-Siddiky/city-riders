import React from 'react';
import Transport from './Transport';
import './Home.css';
import image from '../fakeDate/transportType.json'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [transportImg, setTransportImg] = useState([]);
    useEffect(() => {
        setTransportImg(image)
    }, [])

    return (
        <div className="container">
            <div
                style={{ height: '80vh' }}
                className="d-flex align-items-center flex-wrap justify-content-center"
            >
                {
                    transportImg.map(image => (
                        <Transport key={image.id} transportType={image.transportType} transportImg={image.image} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;