import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './OrderModal.css';

const OrderModal = ({ showModal, handleModalClose, product }) => {
    const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();

    const onSubmit = data => {

    }

    return (
        <div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Order {product?.productName}
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="booking-form mx-auto p-3 rounded-3 shadow-sm">

                        <form className=" mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Full Name" {...register("name", { required: true, maxLength: 80 })} />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} muted />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="tel" placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                            <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Enter Your Address" {...register("address", { required: true })} />

                            <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3" variant="dark" type="submit">Submit</Button>
                        </form>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={handleModalClose} variant="secondary">Close Modal</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
};

export default OrderModal;