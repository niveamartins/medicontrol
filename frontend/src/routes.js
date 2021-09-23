import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/pages/login/loginPage';
import MedicinesPage from './components/pages/medicines/medicinesPage';
import RegisterPage from './components/pages/register/registerPage';
import { verifyLogin } from './services/userServices';


export default function Routes() {

    

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={LoginPage} />
                <Route path="/register" exact component={RegisterPage} />

                { localStorage.getItem("token")? 
                    <Route path="/medicines" exact component={MedicinesPage} />
                 : 
                    <Redirect to="/login" />
                }
            </Switch>
        </BrowserRouter>
    );
}