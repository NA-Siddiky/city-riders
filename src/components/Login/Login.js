import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import SocialMediaLogin from './SocialMediaLogin';
import { FirebaseInit, SignInWithForm } from '../Firebase/FirebaseAuth';
import { RideContext } from '../Context/Context';
import { useState } from 'react';
import Warning from '../Warning/Warning';

const Login = () => {
    FirebaseInit();
    const { setUserInformation } = useContext(RideContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const userEmailNPass = {
        email: '',
        password: '',
    };

    const fromInput = (e) => {
        e.target.name === 'email'
            ? (userEmailNPass.email = e.target.value.trim())
            : (userEmailNPass.password = e.target.value.toString());
    };
    const LogInForm = (e) => {
        const { email, password } = userEmailNPass;
        SignInWithForm(email, password)
            .then((res) => {
                setUserInformation(res);
                // console.log(res);
                history.replace(from);
            })
            .catch((error) => {
                displayError(error.message)
            })

        e.preventDefault();
    };

    const [errorMessage, setErrorMessage] = useState("");
    const displayError = (e) => {
        setErrorMessage(e);
        // console.log(e);
    }

    return (
        <div className="container mt-5 ">
            <Warning warning={errorMessage}></Warning>
            <div className="w-75 d-block m-auto Login">
                <Form
                    onSubmit={LogInForm}
                    className="d-flex flex-column align-items-center"
                >
                    <Form.Group controlId="formBasicEmail" className="w-75 mt-3">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={fromInput}
                            required
                            name="email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="w-75 mt-3">
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            onChange={fromInput}
                            required
                            name="password"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="formBasicCheckbox"
                        className="d-flex justify-content-between w-75 flex-wrap"
                    >
                        <Form.Check type="checkbox" label="Remember Me" />
                        <Form.Label>
                            <Link className="text-danger" to="#">
                                Forgot Password
                        </Link>
                        </Form.Label>
                    </Form.Group>
                    <Button variant="danger" type="submit" className="w-75 mt-3">
                        Login
                </Button>
                    <p className="mt-5 d-flex w-75 flex-wrap">
                        Don't have an account?
                    <Link to="/signup" className="text-danger">
                            Create an account
                    </Link>
                    </p>
                </Form>
            </div>
            <SocialMediaLogin />
        </div>
    );
};

export default Login;