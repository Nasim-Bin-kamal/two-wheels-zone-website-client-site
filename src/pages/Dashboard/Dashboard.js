import React, { useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import './Dashboard.css';
import { Button, Nav } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../components/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';


const Dashboard = () => {
    const { userSingOut, admin, user } = useAuth();
    const [Dashboard, setDashboard] = useState(false);
    const history = useHistory();
    const location = useLocation();


    const handleSignOut = () => {
        userSingOut(location, history);
    }

    let { path, url } = useRouteMatch();

    const showDashBoardMenu = () => setDashboard(!Dashboard);
    return (
        <div>
            <div className='dashboard-navbar'>
                <NavLink to='#' className='menu-bars'>
                    <FaBars onClick={showDashBoardMenu} />

                </NavLink>
                <div>
                    <h2 className="text-white pt-3 ms-5">Dashboard</h2>
                </div>
            </div>
            <Nav fixed="top" className={Dashboard ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showDashBoardMenu}>
                    <li className='navbar-toggle'>
                        <NavLink to='#' className='menu-bars'>
                            <AiOutlineClose />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" className="nav-text text-decoration-none">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className="nav-text text-decoration-none">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}`} className="nav-text text-decoration-none">Dashboard Home</NavLink>
                    </li>
                    {(user && !admin) && <div>
                        <li>
                            <NavLink to={`${url}/myOrders`} className="nav-text text-decoration-none">My Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/addReview`} className="nav-text text-decoration-none">Add Review</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/payment`} className="nav-text text-decoration-none">Payment</NavLink>
                        </li>
                    </div>}
                    {admin && <div>
                        <li>
                            <NavLink to={`${url}/manageOrders`} className="nav-text text-decoration-none">Manage Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/addAdmin`} className="nav-text text-decoration-none">Add Admin</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/addProduct`} className="nav-text text-decoration-none">Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/manageProducts`} className="nav-text text-decoration-none">Manage Products</NavLink>
                        </li>
                    </div>}
                    <Button onClick={handleSignOut} className="m-3 rounded-pill px-4 border-3" size="sm" variant="outline-danger">
                        <FaSignOutAlt className="me-2" />
                        Log Out</Button>
                </ul>
            </Nav>

            {/* routes define */}

            <Switch>

                <Route exact path={path}>
                    <DashboardHome />
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders />
                </Route>
                <Route path={`${path}/addReview`}>
                    <AddReview />
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment />
                </Route>
                <AdminRoute path={`${path}/manageOrders`}>
                    <ManageOrders />
                </AdminRoute>
                <AdminRoute path={`${path}/addAdmin`}>
                    <AddAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                    <AddProduct />
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts />
                </AdminRoute>

            </Switch>
        </div >
    );
};

export default Dashboard;