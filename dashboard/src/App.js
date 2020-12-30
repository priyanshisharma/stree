import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routing from './Routing'
import NavigationBar from './Patient/NavigationBar'
import Dashboard from './Doctor/Dashboard'
import PatientDashboard from './Patient/PatientDashboard'
import PatientProfile from './Doctor/PatientProfile'


function App() {
  const [showDashboard,setShowDashboard]=React.useState(true);
  const [showConsultDoctor,setshowConsultDoctor]=React.useState(false);
  const [showLab,setShowLab]=React.useState(false);
  
  const showElement=(element)=>{
    if(element=="dashboard"){
      setshowConsultDoctor(false)
      setShowLab(false);
      setShowDashboard(true);
    }
    else if(element=="consult"){
      setshowConsultDoctor(true)
      setShowLab(false);
      setShowDashboard(false);
    }
    else {
      setshowConsultDoctor(false)
      setShowLab(true);
      setShowDashboard(false);
    }
  }
  return (
    <div>
    <BrowserRouter>
      <NavigationBar showElement={showElement}/>
      <Routing/>
    </BrowserRouter>
      
      
   </div>
  );
}

export default App;
