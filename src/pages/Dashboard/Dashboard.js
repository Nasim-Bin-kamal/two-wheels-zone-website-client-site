import React, { useState } from 'react';
import { NavLink, useRouteMatch, Switch, Route, } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { DashboardData } from './DashboardData';
import './Dashboard.css';
import { Nav } from 'react-bootstrap';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import UpdateProductModal from '../../components/UpdateProductModal/UpdateProductModal';


const Dashboard = () => {
    const [Dashboard, setDashboard] = useState(false);

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
                        <NavLink to={`${url}`} className="nav-text text-decoration-none">My Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/addReview`} className="nav-text text-decoration-none">Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${url}/payment`} className="nav-text text-decoration-none">Payment</NavLink>
                    </li>
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

                    {DashboardData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path}>{item.icon}<span>{item.title}</span></NavLink>
                            </li>
                        );
                    })}
                </ul>
            </Nav>

            {/* routes define */}

            <Switch>
                <Route exact path={path} component={MyOrders} />
                <Route path={`${path}/addReview`} component={AddReview} />
                <Route path={`${path}/payment`} component={Payment} />
                <Route path={`${path}/manageOrders`} component={ManageOrders} />
                <Route path={`${path}/addAdmin`} component={AddAdmin} />
                <Route path={`${path}/addProduct`} component={AddProduct} />
                <Route path={`${path}/manageProducts`} component={ManageProducts} />
                <Route path={`${path}/update/:id`} component={UpdateProductModal} />
            </Switch>
        </div >
    );
};

export default Dashboard;