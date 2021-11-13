import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 loading">
                <Spinner className="" animation="grow" variant="danger" />
                <Spinner className="" animation="grow" variant="warning" />
                <Spinner className="" animation="grow" variant="success" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ?
                children :
                <Redirect to={{
                    pathname: "/",
                    state: { from: location }
                }}></Redirect>
            }
        >

        </Route>
    );
};

export default AdminRoute;