import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { GiCancel } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [modifiedCount, setModifiedCount] = useState(0);

    const cancelNotify = () => {
        toast.success('Order Cancel Successfully!!', {
            position: 'top-center',
            autoClose: 3000
        });
    }
    const approvedNotify = () => {
        toast.success('Order Approved Successfully!!', {
            position: 'top-center',
            autoClose: 3000
        });
    }
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setModifiedCount(0);
            });
    }, [modifiedCount]);



    const handleApproveOrder = (id) => {
        const data = { orderStatus: "Approved" };

        const url = `http://localhost:5000/orders/update/${id}`;
        axios.put(url, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    approvedNotify();
                    setModifiedCount(res?.data?.modifiedCount)

                }
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
                        const remainingOrders = orders?.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                <ToastContainer />
                <div className="text-center mx-auto py-3">
                    <h2 className="title">Manage All Orders</h2>
                    <h4 className="text-secondary">Total Ordered Product: <strong>{orders?.length}</strong> </h4>
                </div>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>
                                <th>Order Id</th>
                                <th>Product</th>
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Order Status</th>

                                <th>Approve/ Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                orders?.map(order => <tr key={order?._id}>
                                    <td>{order?._id}</td>
                                    <td>{order?.orderedProduct?.productName}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.orderStatus}</td>
                                    <td className="d-flex align-items-center justify-content-around">
                                        <FcApproval onClick={() => handleApproveOrder(order?._id)} className=" fs-4 approve-btn" />
                                        <GiCancel onClick={() => handleCancelOrder(order?._id)} className=" fs-4 cancel-btn" />
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

export default ManageOrders;