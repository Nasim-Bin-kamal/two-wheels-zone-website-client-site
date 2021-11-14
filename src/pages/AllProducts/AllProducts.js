import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import './AllProducts.css';


const AllProducts = () => {

    return (
        <div>
            <Header />
            <Products />
            <Footer />
        </div>
    );
};

export default AllProducts;