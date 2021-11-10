import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './LatestProducts.css';

const LatestProducts = () => {
    const [products] = useProducts();

    return (
        <div className="products-section py-5">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Choose Your Bike</h5>
                    <h2 className="text-secondary fw-bold">Top Featured Bikes</h2>
                </div>
                <div className="mx-auto my-5">
                    <Row xs={1} md={2} lg={3}>
                        {
                            products?.slice(0, 6).map(product => <SingleProduct key={product?._id} product={product} />)
                        }
                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default LatestProducts;