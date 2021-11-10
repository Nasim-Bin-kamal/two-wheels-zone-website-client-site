import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CompanyStatus.css';

const companyAgenda = [
    {
        id: "s1001",
        image: "https://i.ibb.co/X5HCX9k/shipping-free-512-grande.png",
        status: "FREE SHIPPING",
        desc: "Free shipping on all order"
    },
    {
        id: "s1002",
        image: "https://i.ibb.co/jGQSsD5/80630.png",
        status: "ONLINE SUPPORT",
        desc: "Online support 24 hours a day"
    },
    {
        id: "s1003",
        image: "https://i.ibb.co/z5Pr6ds/3427751.png",
        status: "MONEY RETURN",
        desc: "Back guarantee under 7 days"
    },
    {
        id: "s1004",
        image: "https://i.ibb.co/KNsZLhN/87255.png",
        status: "MEMBER DISCOUNT",
        desc: "On every order over $300"
    },
]

const CompanyStatus = () => {
    return (
        <div className="status-section">
            <Container>
                <div className="text-center mx-auto">
                    <h5 className="short-info">Why Travel Time</h5>
                    <h2 className="text-secondary fw-bold">Why You Are Travel With Us</h2>
                </div>
                <div className="py-5 px-auto mx-auto">
                    <Row xs={1} md={2} lg={4}>
                        {
                            companyAgenda?.map(agenda => <div key={agenda?.id}>
                                <Col className="mx-auto my-3">
                                    <div className="d-flex align-items-center justify-content-center flex-column mx-auto p-3 text-white status rounded-3">
                                        <img className="img-fluid mx-auto" width="30%" src={agenda?.image} alt="" />
                                        <h5 className="pt-3">{agenda?.status}</h5>
                                        <p>{agenda?.desc}</p>
                                    </div>
                                </Col>
                            </div>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CompanyStatus;