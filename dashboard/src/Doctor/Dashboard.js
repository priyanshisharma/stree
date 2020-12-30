import React from 'react'
import '../style/dashboard.css'
import pi from '../assets/Patient_icon.jpg'
import {Link,useHistory} from "react-router-dom";

export default function Dashboard() {
    return (
        
        <div style={{background:'rgba(0,0,0,0.07)',marginTop:'0px',marginBottom:'0px',paddingTop:'30px',paddingBottom:'30px'}}>
             <Link to="/PatientProfile" style={{textDecoration:'none'}}>
                <div className="patient-list" >
                    <img src={pi} />
                    <h2>Anjali Patle</h2>
                </div>
            </Link>
            <div className="patient-list">
                <img src={pi} />
                <h2>Anjali Patle</h2>
            </div>
            <div className="patient-list">
                <img src={pi} />
                <h2>Anjali Patle</h2>
            </div>
            <div className="patient-list">
                <img src={pi} />
                <h2>Anjali Patle</h2>
            </div>
        </div>
        
    )
}
