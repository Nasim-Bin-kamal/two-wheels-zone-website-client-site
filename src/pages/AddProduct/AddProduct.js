import axios from 'axios';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
import { ToastContainer, toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://serene-fjord-11430.herokuapp.com/products', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    successNotify();
                    reset();

                }

            });
    };

    const successNotify = () => {
        toast.success('Successfully Added a Product', {
            autoClose: 2000,
            position: 'top-center'
        });
    }
    console.log(errors);
    return (
        <div>
            <Container>
                <ToastContainer />
                <div>
                    <h2 className="text-center mx-auto py-3">Add a New Product</h2>
                </div>

                <div className="add-form mx-auto mb-5 p-3 rounded-3 shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Product Name" {...register("productName", { required: true, maxLength: 80 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Price" {...register("price", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Engine Capacity" {...register("engineCapacity", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Power" {...register("power", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="number" placeholder="Gears" {...register("gears", { required: true })} />

                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Weight" {...register("weight", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Image Url" {...register("image", { required: true })} />
                        <select className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" {...register("category")}>
                            <option value="Commuter">Commuter</option>
                            <option value="Sports">Sports</option>
                            <option value="Cafe Racer">Cafe Racer</option>
                            <option value="Cruiser">Cruiser</option>
                        </select>
                        <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Description" {...register("description", { required: true })} />

                        <Button className="btn-submit border-0 fw-bold px-3 w-100 mt-3 mx-auto" variant="dark" type="submit">Submit</Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddProduct;


















































