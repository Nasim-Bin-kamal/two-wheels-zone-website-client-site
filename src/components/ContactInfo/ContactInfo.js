import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ContactInfo.css';

const ContactInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="contact-section">
            <div className="d-flex align-items-center justify-content-center contact-banner">
                <h1 className=" text-uppercase text-white fw-bold">Contact Us</h1>
            </div>
            <Container>
                <div className="mx-auto my-5">

                    <Row xs={1} md={1} lg={2} className="mx-auto d-flex align-items-center justify-content-center">
                        <Col>
                            <div className="mx-auto">
                                <h5 className="short-info">Talk with our team</h5>
                                <h1 className="text-secondary fw-bold">Any Question?</h1>
                                <h1 className="text-secondary fw-bold">Free to Contact Us</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className=" mx-auto my-3 p-3 rounded-3 shadow-sm">
                                <form className="mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>
                                    <Row className="mx-auto w-100 ">
                                        <Col className="p-0 me-3">
                                            <input className="w-100 input-bg  mx-auto my-2 p-3 border border-2 rounded-3" type="text" placeholder="Full name" {...register("visitorName", { required: true, maxLength: 80 })} />

                                        </Col>
                                        <Col className="p-0">
                                            <input className="w-100 input-bg  mx-auto my-2 p-3 border border-2 rounded-3" type="text" placeholder="Email" {...register("visitorEmail", { required: true, pattern: /^\S+@\S+$/i })} />
                                        </Col>
                                    </Row>
                                    <textarea className="w-100 input-bg  mx-auto my-3 p-3 border border-2 rounded-3" placeholder="Write commnet"{...register("visitorComment", { required: true })} />

                                    <Button className="btn-submit border-0 w-50 fs-4" variant="dark" type="submit">Submit</Button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <div className="text-center mx-auto">
                        <h5 className="short-info">Contact Address</h5>
                        <h2 className="text-secondary fw-bold">Visit and Connected With Us</h2>
                    </div>
                    <div className="py-5 px-auto mx-auto">
                        <Row xs={1} md={2} lg={3}>
                            <Col className="mx-auto my-3">
                                <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white rounded-3 contact-info">
                                    <i className="fas fa-5x fa-phone-alt"></i>
                                    <div className="pt-4 text-center">
                                        <h5 className="">+88092467558</h5>
                                        <h5 className="">+8801705554433</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mx-auto my-3">
                                <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white rounded-3 contact-info">
                                    <i className="fas fa-5x fa-map-marker-alt"></i>
                                    <div className="pt-4 text-center">
                                        <h5 className="">Lake Circus,Kolabagan</h5>
                                        <h5 className="">Dhanmondi, Dhaka-1215</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mx-auto my-3">
                                <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white rounded-3 contact-info">
                                    <i className="fas fa-5x fa-envelope"></i>
                                    <div className="pt-4 text-center">
                                        <h5 className="">two-wheels@gmail.com</h5>
                                        <h5 className="">s.2wheels@gmail.com</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactInfo;