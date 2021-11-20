import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://serene-fjord-11430.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 loading">
                <Spinner className="" animation="grow" variant="danger" />
                <Spinner className="" animation="grow" variant="warning" />
                <Spinner className="" animation="grow" variant="success" />
            </div>
        )
    }

    return (
        <div className="review-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Testimonials and reviews</h5>
                    <h2 className="text-secondary fw-bold">What Our Customers Say</h2>
                </div>
                <div className="py-5">
                    <Row xs={1} md={2} lg={3}>
                        {
                            reviews?.map(singleReview => <Col key={singleReview?._id} className="mx-auto my-4">
                                <div className="bg-white shadow-sm mx-auto p-3 text-center rounded-3">
                                    <h4 className="fw-bold">{singleReview?.name}</h4>
                                    <p className="customer fw-bold">Customer</p>
                                    <small>{singleReview?.review}</small>
                                    <div className="py-3 mx-auto">
                                        <Rating
                                            className="ratings"
                                            readonly
                                            initialRating={singleReview?.rating}
                                            emptySymbol="far fa-star text-warning m-0 p-0"
                                            fullSymbol="fas fa-star text-warning m-0 p-0"
                                        ></Rating>
                                    </div>


                                </div>
                            </Col>)
                        }
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default CustomerReview;