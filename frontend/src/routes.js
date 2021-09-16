import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/login/loginPage';
import MedicinesPage from './components/pages/medicines/medicinesPage';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={LoginPage} />
                <Route path="/medicines" exact component={MedicinesPage} />
            </Switch>
        </BrowserRouter>
    );
}