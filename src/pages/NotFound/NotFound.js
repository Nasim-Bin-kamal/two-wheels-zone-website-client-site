import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleBackToHome = () => {
        history.push("/home");
    }
    return (
        <div>
            <Container>
                <Row>
                    <img className="img-fluid w-50 mx-auto" src="https://i.ibb.co/vsKGggf/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request.jpg" alt="" />

                </Row>
                <div className="d-flex align-items-center justify-content-center mb-5">
                    <Button onClick={handleBackToHome} variant="danger">Back To Home</Button>
                </div>
            </Container>

        </div>
    );
};

export default NotFound;