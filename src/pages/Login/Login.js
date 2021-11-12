import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const { signInWithGoogle, signInWithGithub, userSignIn, errorMsg } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);
    }


    const handleSubmitLogin = (e) => {
        e.preventDefault();
        userSignIn(loginData?.email, loginData?.password, location, history);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    const handleGithubSignIn = () => {
        signInWithGithub(location, history);
    }


    return (
        <div>
            <Container>
                <h2 className="text-center mx-auto my-5 form-title">Please Login First</h2>
                <div className="user-form mx-auto my-5 p-3 rounded-3 shadow-sm">

                    {
                        errorMsg && <Alert variant="danger" dismissible >{errorMsg}</Alert>
                    }

                    <Form className="mx-auto w-100" onSubmit={handleSubmitLogin}>

                        <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                        </Form.Group>


                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3 mx-auto mt-4 d-flex justify-content-center align-items-center" variant="dark" type="submit">
                            Login
                        </Button>

                    </Form>


                    <p className="text-center my-3 mx-auto texti-muted "><small>Or Login With</small></p>
                    <div className="d-flex align-content-center justify-content-center">
                        <i onClick={handleGoogleSignIn} className="fab fa-google mx-2  mb-3 fs-3"></i>
                        <i onClick={handleGithubSignIn} className="fab fa-github mx-2  mb-3 fs-3"></i>
                    </div>

                    <div className="mb-3 d-flex align-items-center justify-content-center">
                        <NavLink className="text-decoration-none" to='/register'>Register New Account</NavLink>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Login;