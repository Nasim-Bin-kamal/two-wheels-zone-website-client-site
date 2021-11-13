import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { GiCancel } from "react-icons/gi";
import './MyOrders.css';
import { toast, ToastContainer } from 'react-toastify';


const MyOrders = () => {
    const { user } = useAuth();
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderedProducts(data));

    }, [user?.email]);

    const cancelNotify = () => {
        toast.success('Order Cancel Successfully!!', {
            position: 'top-center',
            autoClose: 3000
        });
    }

    const handleCancelOrder = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
        const proceed = window.confirm('Are you want to cancel this order');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        cancelNotify();
                        const remainingOrders = orderedProducts?.filter(product => product._id !== id);
                        setOrderedProducts(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                <ToastContainer />
                <div>
                    <h2 className="text-center py-3 title">My Ordered Products: {orderedProducts?.length}</h2>
                </div>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>
                                <th>Order Id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Order Data</th>
                                <th>Order Status</th>
                                <th>Order Cancel</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                orderedProducts?.map(product => <tr key={product?._id}>
                                    <td>{product?._id}</td>
                                    <td>{product?.orderedProduct?.productName}</td>
                                    <td>${product?.orderedProduct?.price}</td>
                                    <td>{product?.orderDate}</td>
                                    <td>{product?.orderStatus}</td>
                                    <td className="d-flex align-items-center justify-content-around">
                                        <GiCancel onClick={() => handleCancelOrder(product?._id)} className=" fs-4 cancel-btn" />
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

export default MyOrders;