import React from 'react'
import NavigationBar from './NavigationBar'
import firebase from 'firebase'
import '../style/dashboard.css'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function PatientDashboard() {
    const [pres,setPres]=React.useState([{text:'',AI:{category:1,normal:0,cancer:0}}])
    const [loading,setLoading]=React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        const db = firebase.firestore();
        db.collection("Prescriptions").get()
            .then(function(querySnapshot) {
                let a=[];
               querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                a.push(doc.data())
            
                });
                setLoading(false)
                setPres(a)
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    },[])
    return (
        loading?<CircularProgress color="secondary" style={{margin:' 20% 49%'}}/>:
        <>
        <NavigationBar/>
        <div style={{background:'rgba(0,0,0,0.07)',marginTop:'0px',marginBottom:'0px',paddingTop:'30px',paddingBottom:'30px'}}>
            <div id="sub-card">
            <div className="dashboard-card">
                <div className="dashboard-card-head">
                    Lab Reports
                </div>
                <div className="report-list">
                    Mammogram Report-17/12/20
                </div> 
                <div className="report-list">
                    Blood-test Report-20/12/20
                </div> 
            </div>
            <div className="dashboard-card">
                <div className="dashboard-card-head">
                    Previous Appointment History
                </div>
                <div className="report-list">
                    General Checkup on 2/12/20
                </div> 
                <div className="report-list">
                    Consultancy with Dr. Naina Singh on 5/12/20
                </div> 
                <div className="report-list">
                    Video consultancy on 10/12/20
                </div> 
            </div>
            </div>
            <div className="dashboard-main-card">
                <div className="dashboard-card-head">
                    Doctor Consultation
                </div>
                <div id="doctor-details">
                   <div style={{display:'flex'}}> <div style={{color:'#0088e8',fontWeight:'500',marginRight:'10px'}}>Doctor Name: </div><div> Dr. Shushmita Agrawal</div></div>
                   <div style={{display:'flex'}}> <div style={{color:'#0088e8',fontWeight:'500',marginRight:'10px'}}>Hospital Name: </div><div> Ram Narayan Hospital, G.E. Road, Raipur</div></div>
                </div>
                {
                    pres.map((item,i)=>
                        <div className="prescription">
                            <div>
                                <h2 style={{color:'#0088e8'}}>{item.title}</h2>
                            </div>
                                {item.text}
                            <div>
                                <div>
                                    <h2 style={{color:'#ff58c9'}}>AI Report: {item.AI.category==1?"Invasive Ductal Carcinoma":"Metastatic Tissue"}</h2>
                                    <div style={{marginTop:'-20px'}}>
                                    NORMAL: {item.AI.normal}<br/> {item.AI.category==1?"Invasive Ductal Carcinoma":"Metastatic Tissue"}: {item.AI.cancer}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
        </>
    )
}
