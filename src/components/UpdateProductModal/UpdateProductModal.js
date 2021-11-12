import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './UpdateProductModal.css';

const UpdateProductModal = ({ showModal, handleModalClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Bike</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add-form mx-auto p-3 rounded-3 shadow-sm">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Product Name" {...register("Product Name", { required: true, maxLength: 80 })} />
                            <input type="text" placeholder="Price" {...register("Price", { required: true })} />
                            <input type="text" placeholder="Engine Capacity" {...register("Engine Capacity", { required: true })} />
                            <input type="text" placeholder="Power" {...register("Power", { required: true })} />
                            <input type="number" placeholder="Gears" {...register("Gears", { required: true })} />

                            <input {...register("Category", { required: true })} type="radio" value="Sports, Cruiser, Cafe Racer,Commuter" />
                            <input type="text" placeholder="Weight" {...register("Weight", { required: true })} />
                            <input type="text" placeholder="Image Url" {...register("Image Url", { required: true })} />
                            <textarea {...register("Description", { required: true })} />

                            <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3" variant="dark" type="submit">Submit</Button>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdateProductModal;