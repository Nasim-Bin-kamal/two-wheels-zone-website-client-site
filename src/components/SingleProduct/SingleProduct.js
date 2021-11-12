import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const { _id, productName, price, engineCapacity, power, image, category } = product || {};
    const history = useHistory();

    const handleOrderProduct = (id) => {
        history.push(`/products/order/${id}`);
    }

    return (
        <div>
            <Col className="mx-auto product-card">
                <Card className="mx-auto my-3 p-0 rounded-3 ">
                    <div className="img-body">
                        <Card.Img className="img-fluid w-100 card-img" variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <div className="d-flex justify-content-between text-secondary">
                            <p className="text-danger fw-bold fs-5  ">${price}</p>
                            <p className="text-secondary fw-bold">{engineCapacity} CC / {power} bhp</p>
                        </div>

                        <Card.Title className="fs-4 py-2 fw-bold"><span className="title">{productName}</span></Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="pt-3">Category: {category}</p>
                            <Button
                                onClick={() => handleOrderProduct(_id)}
                                className="border-0  btn-book" variant="dark"><i className="far fa-check-circle"></i> Book Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default SingleProduct;