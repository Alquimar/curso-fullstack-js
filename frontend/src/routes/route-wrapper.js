import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAthenticated } from '../services/auth';

const RouteWrapper = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAthenticated() ?
                (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
                )
        }
    />
);

export default RouteWrapper;