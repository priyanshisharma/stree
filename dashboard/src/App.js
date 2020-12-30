import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routing from './Routing'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import NavigationBar from './Patient/NavigationBar'
import Dashboard from './Doctor/Dashboard'
import PatientDashboard from './Patient/PatientDashboard'
import PatientProfile from './Doctor/PatientProfile'


function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
      
   </div>
  );
}

export default App;
