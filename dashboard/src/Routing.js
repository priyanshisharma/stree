import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './Doctor/Dashboard'
import PatientDashboard from './Patient/PatientDashboard'
import PatientProfile from './Doctor/PatientProfile'

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
            
        </Switch>
    )
}
