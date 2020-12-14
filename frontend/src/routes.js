import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Home() {
    return(
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}

function Contacts() {
    return(
        <div>
            <h2>Lista contatos</h2>
        </div>
    )
}

function Signin() {
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}

function Signup() {
    return(
        <div>
            <h2>Cadastro</h2>
        </div>
    )
}

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}