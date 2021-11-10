import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const handleSubmitLogin = (e) => {

    }
    return (
        <div>
            <Container>
                <h2 className="text-center mx-auto my-5 form-title">Please Login First</h2>
                <div className="user-form mx-auto my-5 p-3 rounded-3 shadow-sm">
                    <Form className="mx-auto w-100" onSubmit={handleSubmitLogin}>

                        <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>


                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3 mx-auto mt-4 d-flex justify-content-center align-items-center" variant="success" type="submit">
                            Login
                        </Button>
                        {/* <p className="text-danger text-center mx-auto my-3">{errorMsg}</p> */}
                    </Form>
                    <p className="text-center my-3 mx-auto texti-muted "><small>Or Login With</small></p>
                    <div className="d-flex align-content-center justify-content-center">
                        <i className="fab fa-google mx-2  mb-3 fs-3"></i>
                        <i className="fab fa-github mx-2  mb-3 fs-3"></i>
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