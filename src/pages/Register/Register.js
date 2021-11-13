import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { signInWithGoogle, signInWithGithub, registerUser, errorMsg } = useAuth();

    const history = useHistory();
    const location = useLocation();


    const handleOnBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        console.log(field, value, registerData);

    }

    const handleSubmitRegistration = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Password did not match');
            return;
        }

        registerUser(registerData?.email, registerData?.password, registerData?.name, location, history)

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
                <h2 className="text-center mx-auto my-5 form-title">Please Register First</h2>
                <div className="user-form mx-auto my-5 p-3 rounded-3 shadow-sm">
                    {
                        errorMsg && <Alert variant="danger" dismissible >{errorMsg}</Alert>
                    }
                    <Form className="mx-auto w-100" onSubmit={handleSubmitRegistration}>

                        <Form.Group className="mb-3 mx-auto" controlId="formBasicText">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="text" name="name" placeholder="Enter full name" required />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="password" name="password2" placeholder="Re Enter password" required />
                        </Form.Group>


                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3 mx-auto mt-4 d-flex justify-content-center align-items-center" variant="success" type="submit">
                            Registration
                        </Button>

                    </Form>
                    <p className="text-center my-3 mx-auto texti-muted "><small>Or Register With</small></p>
                    <div className="d-flex align-content-center justify-content-center">
                        <i onClick={handleGoogleSignIn} className="fab fa-google mx-2  mb-3 fs-3"></i>
                        <i onClick={handleGithubSignIn} className="fab fa-github mx-2  mb-3 fs-3"></i>
                    </div>

                    <div className="mb-3 d-flex align-items-center justify-content-center">
                        <NavLink className="text-decoration-none" to='/login'>Alredy have an account? Please Login</NavLink>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Register;