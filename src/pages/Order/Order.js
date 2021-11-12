import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
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
                    <div className="text-center py-5">
                        <h1>Order <span className="product-name fw-bold">{productName}</span> Bike</h1>
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
                                        <Button onClick={handleModalShow} className="btn-submit border-0" variant="dark" size="lg">Click Here To Order</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>
                    {/* <div className="mx-auto py-5">
                        <div className="text-center mx-auto pb-3">
                            <h4 className="user">Dear Sir, Nasim Bin Kamal</h4>
                            <p>If you want to Order this bike please click the button below</p>
                        </div>
                        <div className="d-flex justify-content-center pt-2">
                            <Button onClick={handleModalShow} variant="dark" size="lg">Click Here To Order</Button>
                        </div>
                    </div> */}
                    <OrderModal
                        product={product}
                        showModal={showModal}
                        handleModalClose={handleModalClose}
                    />

                    {/* <div className="mx-auto pb-5">
                        <h2 className="text-capitalize text-center mx-auto py-3">Order Form</h2>

                        

                        <div className="booking-form mx-auto p-3 rounded-3 shadow-sm">

                            <form className=" mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>

                                <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} muted />
                                <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="tel" placeholder="Mobile number" {...register("mobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                                <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="date" placeholder="Travel Date" {...register("travelDate", { required: true })} />
                                <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Enter Your Address" {...register("address", { required: true })} />

                                <Button className="btn-submit border-0 fw-bold px-3 w-50 mt-3" variant="success" type="submit">Submit</Button>
                            </form>
                        </div>


                    </div> */}

                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default Order;