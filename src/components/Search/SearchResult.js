import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import fakeData from '../fakeDate/fakeData.json';
import { IoCarSportSharp as Car } from 'react-icons/io5';
import { IoIosTrain as Train } from 'react-icons/io';
import { RiBusWifiFill as Bus } from 'react-icons/ri';
import { RiMotorbikeFill as Bike } from 'react-icons/ri';
import { ImUsers, ImRoad, ImLocation } from 'react-icons/im';
import './Search.css';

function SearchResult({ resetSearch, location, transport }) {
	const { from, to } = location;
	const [transportInfo, setTransportInfo] = useState([]);

	useEffect(() => {
		const info = fakeData.filter(
			(type) => transport.toLowerCase() === type.transportType.toLowerCase()
		);
		setTransportInfo(info);
	}, [transport]);
	const TransportIcon = () => {
		return transport === 'car' ? (
			<Car />
		) : transport === 'bike' ? (
			<Bike />
		) : transport === 'Train' ? (
			<Train />
		) : (
			<Bus />
		);
	};

	return (
		<Form onSubmit={resetSearch} className="searchResult">
			<div className="bg-warning p-3 rounded">
				<h3 className="my-3 text-light location">
					<ImRoad />
					{from}
				</h3>
				<h3 className="my-3 text-light location">
					<ImLocation />
					{to}
				</h3>
			</div>

			{transportInfo.map((type, index) => (
				<div
					key={index}
					className="d-flex p-3 rounded my-2 bg-light align-items-center justify-content-between"
				>
					<h3>
						{TransportIcon()}
						{type.transportType}
					</h3>
					<h5>
						{<ImUsers />}
						{type.capacity}
					</h5>
					<h5>${type.fare}</h5>
				</div>
			))}

			<Button variant="warning" type="submit" className="mt-2">
				Search Again
			</Button>
		</Form>
	);
}

export default SearchResult;