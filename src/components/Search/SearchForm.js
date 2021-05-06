import React from 'react';
import { Button, Form } from 'react-bootstrap';

function SearchForm({ searchLocation, setData }) {
	return (
		<Form onSubmit={searchLocation}>
			<Form.Group controlId="formBasicFrom">
				<Form.Label className="font-weight-bold">Pick From</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter Journey Location"
					name="locationFrom"
					onChange={setData}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicTo">
				<Form.Label className="font-weight-bold">Pick To</Form.Label>
				<Form.Control
					type="text"
					placeholder="Where you want to Go"
					name="locationTo"
					onChange={setData}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label className="font-weight-bold">Date</Form.Label>
				<Form.Control
					type="date"
					placeholder="Enter Date"
					name="Date"
					onChange={setData}
				/>
			</Form.Group>

			<Button variant="warning" type="submit">
				Search
			</Button>
		</Form>
	);
}

export default SearchForm;
