import React from 'react';
import CompanyStatus from '../../components/CompanyStatus/CompanyStatus';
import CustomerReview from '../../components/CustomerReview/CustomerReview';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LatestProducts from '../../components/LatestProducts/LatestProducts';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <LatestProducts />
            <CustomerReview />
            <CompanyStatus />
            <Footer />
        </div>
    );
};

export default Home;