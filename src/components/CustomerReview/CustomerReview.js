import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CustomerReview.css';

const CustomerReview = () => {
    return (
        <div className="review-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Testimonials and reviews</h5>
                    <h2 className="text-secondary fw-bold">What Our Customers Say</h2>
                </div>
                <div className="py-5">
                    <Row xs={1} md={2} lg={4}>
                        <Col className="mx-auto my-4">
                            <div className="bg-white shadow-sm mx-auto p-3 text-center rounded-3">
                                <h4 className="fw-bold">Larry Page</h4>
                                <p className="customer fw-bold">Customer</p>
                                <h6 className="text-secondary">test@gmail.com</h6>
                                <small>There commitment and behavior was good and the after sales service they are so good and responsible</small>
                                <p>Rating:</p>
                            </div>
                        </Col>
                        <Col className="mx-auto my-4">
                            <div className="bg-white shadow-sm mx-auto p-3 text-center rounded-3">
                                <h4 className="fw-bold">Larry Page</h4>
                                <p className="customer fw-bold">Customer</p>
                                <h6 className="text-secondary">test@gmail.com</h6>
                                <small>There commitment and behavior was good and the after sales service they are so good and responsible</small>
                                <p>Rating:</p>
                            </div>
                        </Col>
                        <Col className="mx-auto my-4">
                            <div className="bg-white shadow-sm mx-auto p-3 text-center rounded-3">
                                <h4 className="fw-bold">Larry Page</h4>
                                <p className="customer fw-bold">Customer</p>
                                <h6 className="text-secondary">test@gmail.com</h6>
                                <small>There commitment and behavior was good and the after sales service they are so good and responsible</small>
                                <p>Rating:</p>
                            </div>
                        </Col>
                        <Col className="mx-auto my-4">
                            <div className="bg-white shadow-sm mx-auto p-3 text-center rounded-3">
                                <h4 className="fw-bold">Larry Page</h4>
                                <p className="customer fw-bold">Customer</p>
                                <h6 className="text-secondary">test@gmail.com</h6>
                                <small>There commitment and behavior was good and the after sales service they are so good and responsible</small>
                                <p>Rating:</p>
                            </div>
                        </Col>


                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CustomerReview;