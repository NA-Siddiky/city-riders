import { Map, Marker } from 'pigeon-maps';
import React from 'react';

const PigeonMap = () => {
    return (
        <div className="d-flex justify-content-center rounded shadow">
            <Map
                defaultCenter={[23.777176, 90.399452]}
                defaultZoom={12}
                width={600}
                height={400}
            >
                <Marker anchor={[23.777176, 90.399452]} payload={1} />
            </Map>
        </div>
    );
};

export default PigeonMap;