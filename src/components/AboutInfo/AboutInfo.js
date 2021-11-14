import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutInfo.css';

const teamMemberInfo = [
    {
        id: "1",
        designation: "Founder",
        name: "Edward Nash",
        image: "https://i.ibb.co/3dnRtNV/team-1-1.jpg"
    },
    {
        id: "2",
        designation: "Manager",
        name: "Roxie Palmer",
        image: "https://i.ibb.co/0jCBbpj/team-1-4.jpg"
    },
    {
        id: "3",
        designation: "Chairman",
        name: "Hellen Lowe",
        image: "https://i.ibb.co/FXSB4Ss/team-1-3.jpg"
    }
]

const AboutInfo = () => {
    return (
        <div className="about-section">
            <div className="d-flex align-items-center justify-content-center about-banner">
                <h1 className=" text-uppercase text-white fw-bold">About Us</h1>
            </div>
            <div className="members-section">
                <Container>
                    <div className="mx-auto">
                        <div className="mx-auto">
                            <h2 className="text-center mx-auto text-uppercase py-5 fw-bold title">Team Members</h2>
                        </div>
                        <Row xs={1} md={2} lg={3} className="pb-5 mx-auto">
                            {
                                teamMemberInfo?.map(singleMember => <Col key={singleMember?.id} className="mx-auto my-3">
                                    <div className="mx-auto shadow-sm p-3 bg-white  rounded-3">
                                        <img className="img-fluid w-100 mx-auto pb-3" src={singleMember?.image} alt="" />
                                        <h5 className="text-secondary">{singleMember?.designation}</h5>
                                        <h3 className="director-name">{singleMember?.name}</h3>
                                    </div>
                                </Col>)
                            }
                        </Row>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default AboutInfo;