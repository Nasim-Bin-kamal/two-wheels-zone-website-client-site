import React from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { AiFillDelete } from "react-icons/ai";
import './ManageProducts.css';
import { toast, ToastContainer } from 'react-toastify';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const deleteNotify = () => {
        toast.success('Successfully Deleted The Product', {
            autoClose: 3000,
            position: 'top-center'
        });
    }

    const handleDeleteProduct = (id) => {
        const url = `https://serene-fjord-11430.herokuapp.com/products/${id}`;
        const proceed = window.confirm('Are you want to delete this product');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        deleteNotify();
                        const remainingProducts = products?.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }

                });
        }

    }

    return (
        <div>
            <Container>
                <ToastContainer />
                <div className="mx-auto text-center py-3">
                    <h2 className="title">Manage All Products</h2>
                    <h5 className="text-secondary">You can update or delete a product</h5>
                </div>
                <div className="mx-auto my-4">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                products?.map(product => <tr key={product?._id}>
                                    <td>{product?._id}</td>
                                    <td>{product?.productName}</td>
                                    <td>{product?.category}</td>
                                    <td>{product?.price}</td>

                                    <td>
                                        <AiFillDelete className="delete-icon fs-5" onClick={() => handleDeleteProduct(product?._id)} />
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </Table>

                </div>




            </Container>
        </div>
    );
};

export default ManageProducts;