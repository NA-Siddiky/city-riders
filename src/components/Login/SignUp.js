import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialMediaLogin from './SocialMediaLogin';
import { FirebaseInit, SignUpWithForm } from '../Firebase/FirebaseAuth';
import { useState } from 'react';
import Warning from '../Warning/Warning';
import './Login.css'
import { useContext } from 'react';
import { RideContext } from '../Context/Context';

function SignUp() {
	const { register, errors } = useForm();
	const history = useHistory();
	const location = useLocation();
	const { userInformation, setUserInformation } = useContext(RideContext)

	const { from } = location.state || { from: { pathname: '/' } };

	const createUser = {
		email: '',
		password: '',
		confirmPassword: '',
		fullName: '',
	};

	const validatePass = () => {
		return createUser.confirmPassword.length > 8 &&
			createUser.confirmPassword === createUser.password
			? true
			: false;
	};

	const fromInput = (e) => {
		e.target.name === 'email'
			? (createUser.email = e.target.value.trim())
			: e.target.name === 'password'
				? (createUser.password = e.target.value.toString())
				: e.target.name === 'confirmPassword'
					? (createUser.confirmPassword = e.target.value.toString())
					: (createUser.fullName = e.target.value);
	};

	FirebaseInit();
	const onSubmit = (e) => {
		const { email, confirmPassword, fullName } = createUser;
		if (validatePass) {
			SignUpWithForm(email, confirmPassword, fullName)
				.then((res) => {
					setUserInformation(res);
					history.replace(from);
				})
				.catch((error) => {
					displayError(error.message)
				})
		}
		e.preventDefault();
	};
	
	const errMsg = (e) => {
		// console.log(e);
	};

	const [errorMessage, setErrorMessage] = useState("");
	const displayError = (e) => {
		setErrorMessage(e);
	}

	return (
		<div className="container  mt-5 ">
			<Warning warning={errorMessage}></Warning>
			<div className="w-75 d-block m-auto Auth Login">
				<Form
					onSubmit={onSubmit}
					className="d-flex flex-column align-items-center"
				>
					<Form.Group controlId="formBasicName" className="w-75 mt-3">
						<Form.Control
							type="text"
							placeholder="Enter Full Name"
							name="firstName"
							required
							ref={register({ required: true, maxLength: 20 })}
							onChange={fromInput}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicEmail" className="w-75 mt-3">
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							required
							ref={register(
								{ required: true },
								{
									pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								}
							)}
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.email && errMsg()}
					<Form.Group controlId="formBasicPassword" className="w-75 mt-3">
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							required
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.password && <span>Please Type Correct Email</span>}
					<Form.Group
						controlId="formBasicConfirmPassword"
						className="w-75 mt-3"
					>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							onKeyUp={fromInput}
							required
							name="confirmPassword"
						/>
					</Form.Group>
					<Button variant="danger" type="submit" className="w-75 mt-3">
						SignUp
					</Button>
					<p className="mt-5 d-flex w-75 flex-wrap">
						Already have an Account?
						<Link to="/login" className="text-danger">
							Login
						</Link>
					</p>
				</Form>
			</div>

			<SocialMediaLogin />
		</div>
	);
}

export default SignUp;
