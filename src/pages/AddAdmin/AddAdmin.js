import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './AddAdmin.css';

const AddAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }
    console.log(email);

    const adminNotify = () => {
        toast.success('Admin created successfully!!', {
            position: 'top-center',
            autoClose: 2000
        });
    }

    const handleSubmitAdmin = (e) => {
        const user = { email };
        e.preventDefault();
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    adminNotify();
                    e.target.reset();

                }
            });
    }



    return (
        <div>
            <Container>
                <ToastContainer />
                <h2 className="text-center mx-auto title py-5">Add New Admin</h2>
                <div className="add-admin-section mx-auto my-4 p-3">
                    <Form onSubmit={handleSubmitAdmin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleOnBlur} type="email" name="email" placeholder="Enter email" />

                        </Form.Group>
                        <Button className="btn-submit mt-3 border-0 fw-bold px-3 w-50 mx-auto  d-flex justify-content-center align-items-center" variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>

        </div>
    );
};

export default AddAdmin;