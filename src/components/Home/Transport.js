import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Transport = ({ transportType, transportImg }) => {
    return (
        <div className="m-3 mainCard rounded shadow">
            <Link to={`/destination/${transportType}`}>
                <Card style={{ width: '15rem' }} className="h-100">
                    <Card.Img variant="top" src={transportImg} />
                    <Card.Body>
                        <Card.Title className="transportName">
                            {transportType.toUpperCase()}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Transport;