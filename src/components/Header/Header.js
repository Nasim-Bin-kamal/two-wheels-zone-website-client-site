import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import { useLocation, useHistory } from 'react-router';
import { FaSignOutAlt } from "react-icons/fa";


const Header = () => {
    const { user, userSingOut } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const activeStyle = {
        color: 'red',
        fontWeight: '600'
    }

    const handleSignOut = () => {
        userSingOut(location, history);
    }
    return (
        <div>
            <Navbar collapseOnSelect className="navbarBg" bg="" variant="light" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand me-5">
                        <NavLink to="/home">
                            <img className="img-fluid" src="https://i.ibb.co/mJPGSTk/wheel-removebg-preview.png" alt="" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#dae2e273' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/products">All Bikes</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/contact">Contact</NavLink>

                        </Nav>
                        <Nav>
                            {
                                user?.email ? <>
                                    <small className="text-white mx-auto pe-3 pt-1">{user?.displayName}</small>
                                    <NavLink className="me-3 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/dashboard">Dashboard</NavLink>
                                    <Button className="rounded-pill px-4 border-0" size="sm" variant="danger" onClick={handleSignOut}>
                                        <FaSignOutAlt className="me-2" />
                                        Log Out</Button>
                                </>
                                    :
                                    <>
                                        <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/register">Register</NavLink>
                                        <NavLink className="mx-2 text-decoration-none text-white fs-5" activeStyle={activeStyle} to="/login">Login</NavLink>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;