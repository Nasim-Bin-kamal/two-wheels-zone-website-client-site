import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import './CustomerReview.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


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
                <div className="mx-3 py-5">
                    <Slider {...settings}>
                        {
                            reviews?.map(singleReview => (
                                <div>
                                    <Card key={singleReview?._id} className="shadow-sm mx-2 my-5 text-center px-3 py-4 rounded-3">
                                        <h4 className="fw-bold">{singleReview?.name}</h4>
                                        <p className="customer fw-bold">Customer</p>
                                        <div className='py-2 comment'>
                                            <small>{singleReview?.review}</small>
                                        </div>
                                        <div className="py-3 mx-auto">
                                            <Rating
                                                className="ratings"
                                                readonly
                                                initialRating={singleReview?.rating}
                                                emptySymbol="far fa-star text-warning m-0 p-0"
                                                fullSymbol="fas fa-star text-warning m-0 p-0"
                                            ></Rating>
                                        </div>
                                    </Card>
                                </div>
                            ))
                        }
                    </Slider>


                </div>
            </Container>
        </div>
    );
};

export default CustomerReview;