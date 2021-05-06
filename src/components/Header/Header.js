import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { RideContext } from '../Context/Context';
import { Button } from 'react-bootstrap';
import { Logout } from '../Firebase/FirebaseAuth';

const Header = () => {
    const { userLogin, userInformation, setUserInformation } = useContext(RideContext);
    // console.log(userLogin);
    const loginStatus = userLogin;

    const logOutHandler = () => {
        Logout()
            .then(promise => setUserInformation({}))
    };

    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">City Riders</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destination/:type">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            loginStatus
                                ? <div>
                                    {userInformation.name}   <Button onClick={logOutHandler} className="btn btn-danger">Log Out</Button>
                                </div>
                                : <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;