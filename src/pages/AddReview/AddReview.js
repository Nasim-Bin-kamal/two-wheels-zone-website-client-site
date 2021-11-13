import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './AddReview.css';
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleRating = (rating) => {
        setRating(rating);
    }

    const reviewNotify = () => {
        toast.success('Successfully Reviewed!!', {
            position: 'top-center',
            autoClose: 2000
        });
    }

    const onSubmit = data => {
        data.name = user?.displayName;
        data.email = user?.email;
        data.rating = rating;

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    reviewNotify();
                    reset();
                    setRating("");

                }
            });

    };
    console.log(errors);


    return (
        <div>
            <Container>
                <ToastContainer />
                <div className="mx-auto text-center py-5">
                    <h2 className="title">Please Make A Review</h2>
                    <h5>Review about our website and services</h5>
                </div>

                <div className="mx-auto add-review-section rounded-3 p-3 shadow-sm">

                    <div>
                        <h5>Select Rating</h5>
                        <ReactStars
                            name="rating"
                            onChange={handleRating}
                            size={50}
                            isHalf={true}
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Write Review" {...register("review", { required: true })} rows={5} />

                        <Button className="btn-submit border-0 fw-bold px-3 w-50 mx-auto  d-flex justify-content-center align-items-center" variant="dark" type="submit">
                            Submit
                        </Button>
                    </form>


                </div>

            </Container >
        </div >
    );
};

export default AddReview;