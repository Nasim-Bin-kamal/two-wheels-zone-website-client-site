import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products] = useProducts();

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