import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './Doctor/Dashboard'
import PatientDashboard from './Patient/PatientDashboard'
import PatientProfile from './Doctor/PatientProfile'
import Login from "./Authentication/Login"
import Signup from "./Authentication/Signup"

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/Doctor">
                <Dashboard/>
            </Route>
            <Route exact path="/Patient">
                <PatientDashboard/>
            </Route>
            <Route exact path="/PatientProfile">
                <PatientProfile/>
            </Route>
            <Route exact path="/Login">
                <Login/>
            </Route>
            <Route exact path="/Signup">
                <Signup/>
            </Route>
            
        </Switch>
    )
}
