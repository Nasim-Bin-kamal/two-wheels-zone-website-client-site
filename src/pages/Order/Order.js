import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { GiConfirmed } from "react-icons/gi";
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import OrderModal from '../../components/OrderModal/OrderModal';

import './Order.css';


const Order = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const { productName, price, engineCapacity, power, gears, category, weight, image, description } = product || {};


    const [showModal, setShowModal] = useState(false);
    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    const orderNotify = () => {
        toast.success('Ordered Successfully', {
            position: 'top-center',
            autoClose: 2000
        });
    }

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);



    return (
        <div>
            <Header />
            <div className="order-section mx-auto">
                <Container>
                    <ToastContainer />
                    <div className="text-center py-5 mx-auto">
                        <h2>Order<span className="product-name fw-bold">{productName}</span> Bike</h2>
                        <h5 className="text-secondary">Before order please see the details information</h5>
                    </div>
                    <div className="mx-auto pb-5">
                        <Row xs={1} md={1} lg={2} className="mx-auto d-flex align-items-center justify-content-center shadow-sm bg-light px-2 py-3">
                            <Col>
                                <img className="img-fluid w-100 mx-auto" src={image} alt="" />
                            </Col>
                            <Col>
                                <div className="mx-auto">
                                    <h4 className="text-center py-2">Details</h4>
                                    <Table striped bordered hover responsive>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Information</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="fw-bold">Product</td>
                                                <td>{productName}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Price</td>
                                                <td>${price}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Engine</td>
                                                <td>{engineCapacity} CC</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Power</td>
                                                <td>{power} bhp</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Gears</td>
                                                <td>{gears}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Weight</td>
                                                <td>{weight} Kg</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Category</td>
                                                <td>{category}</td>
                                            </tr>
                                            <tr>
                                                <td className="fw-bold">Description</td>
                                                <td>{description}</td>
                                            </tr>

                                        </tbody>

                                    </Table>
                                    <div className="d-flex justify-content-center pt-2">
                                        <Button onClick={handleModalShow} className="btn-submit border-0" variant="dark" size="lg">
                                            <GiConfirmed className="me-1 pb-1 fs-5" />
                                            Click Here To Order</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <OrderModal
                        product={product}
                        showModal={showModal}
                        handleModalClose={handleModalClose}
                        orderNotify={orderNotify}
                    />



                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default Order;