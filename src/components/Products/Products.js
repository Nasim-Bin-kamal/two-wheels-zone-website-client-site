import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products] = useProducts();
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center py-5" style={{ margin: "300px 0" }}>
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="success" />
            </div>
        )
    }

    return (
        <div className="allProducts-section">
            <div className="d-flex align-items-center justify-content-center products-banner">
                <h1 className=" text-uppercase text-white fw-bold">Bikes Collections</h1>
            </div>

            <Container>
                <div className="text-center mx-auto pt-5">
                    <h5 className="short-info">Choose Your Bike</h5>
                    <h2 className="text-secondary fw-bold text-capitalize">All Kinds of Bikes are available here</h2>
                </div>

                <div className="mx-auto py-5">
                    <Row xs={1} md={2} lg={3}>

                        {
                            products?.map(product => <SingleProduct key={product?._id} product={product} />)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Products;