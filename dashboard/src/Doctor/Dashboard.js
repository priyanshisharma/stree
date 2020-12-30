import React from 'react'
import NavigationBar from '../Patient/NavigationBar'
import '../style/dashboard.css'
import pi from '../assets/Patient_icon.jpg'
import {Link,useHistory} from "react-router-dom";

export default function Dashboard() {
    return (
        <>
        
      <NavigationBar/>
        <div style={{background:'rgba(0,0,0,0.07)',marginTop:'0px',marginBottom:'0px',paddingTop:'30px',paddingBottom:'30px'}} id="lab-site">
            <Link to="/PatientProfile" style={{textDecoration:'none'}}>
                <div className="patient-list" >
                    <img src={pi} />
                    <h2>Rajni Singh</h2>
                </div>
            </Link>
            <div className="patient-list">
                <img src={pi} />
                <h2>Shivani Gupta</h2>
            </div>
            <div className="patient-list">
                <img src={pi} />
                <h2>Muskan Sinha</h2>
            </div>
            <div className="patient-list">
                <img src={pi} />
                <h2>Anjali Patle</h2>
            </div>
        </div>
        </>
    )
}
