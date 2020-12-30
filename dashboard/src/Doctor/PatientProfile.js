import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField';
import NavigationBar from '../Patient/NavigationBar'
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function PatientProfile() {
    const [pres,setPres]=React.useState([{title:'',text:'',AI:''}])
    const [prescription,setPrescription]=React.useState('')
    const [prescriptionTitle,setPrescriptionTitle]=React.useState('')
    const [category,setCategory]=React.useState(1)
    const [normal,setNormal]=React.useState(0)
    const [cancer,setCancer]=React.useState(0)
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
                setLoading(false)
            });
                setPres(a)
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    },[])

    const submitPres=()=>{
        const p=[...pres]
        p.push({title:prescriptionTitle,text:prescription,AI:{category,normal,cancer}})
        setPres(p);
        setPrescription('');
        setPrescriptionTitle('');
        setCancer(0);
        setNormal(0);
        setCategory(1)
        const db = firebase.firestore();
        db.collection("Prescriptions").add(
            {title:prescriptionTitle,text:prescription,AI:{category,normal:Number(normal),cancer:Number(cancer)}}
        )
            .then(function(querySnapshot) {
                console.log("hua")
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
        });
    }
    return (
        loading?<CircularProgress color="secondary" style={{margin:' 20% 49%'}}/>:
        <>
        
      <NavigationBar/>
        <div style={{background:'rgba(0,0,0,0.07)',padding:'5%',minHeight:'80vh'}}>
             <div className="dashboard-main-card">
                <div className="dashboard-card-head">
                    Patient History
                </div>
                <div id="doctor-details">
                   <div style={{display:'flex'}}> <div style={{color:'#0088e8',fontWeight:'500',marginRight:'10px'}}>Patient Name: </div><div> Rajni Singh</div></div>
                   <div style={{display:'flex'}}> <div style={{color:'#0088e8',fontWeight:'500',marginRight:'10px'}}>Age: </div><div> 45 years</div></div>
                </div>
                 {
                    pres.map((item,i)=>
                        <div className="prescription">
                            <div>
                                <h2 style={{color:'#0088e8'}}>{item.title}</h2>
                            </div>
                                {item.text}
                            <div>
                                <h2 style={{color:'#ff58c9'}}>AI Report: {item.AI.category==1?"Invasive Ductal Carcinoma":"Metastatic Tissue"}</h2>
                                <div style={{marginTop:'-20px'}}>
                                 NORMAL: {item.AI.normal}<br/> {item.AI.category==1?"Invasive Ductal Carcinoma":"Metastatic Tissue"}: {item.AI.cancer}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="dashboard-main-card" style={{textAlign:'center',padding:'30px 0px'}}>
                <h2 style={{color:'#0088e8'}}>Add Prescription</h2>
                <TextField
                    id="outlined-multiline-static"
                    label="Prescription Title"
                    value={prescriptionTitle}
                    onChange={(e)=>setPrescriptionTitle(e.target.value)}
                    variant="outlined"
                    style={{width:'80%',marginBottom:'30px'}}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Add Prescription"
                    multiline
                    rows={4}
                    value={prescription}
                    onChange={(e)=>setPrescription(e.target.value)}
                    variant="outlined"
                    style={{width:'80%',marginBottom:'10px'}}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Select Report Type"
                    select
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    className="pres-input"
                    variant="outlined"
                    style={{margin:'30px'}}
                >
                        <MenuItem value="1">Invasive Ductal Carcinoma </MenuItem>
                        <MenuItem value="2">Metastatic Tissue </MenuItem>
                </TextField>
                    <TextField
                        id="outlined-multiline-static"
                        label="Normal"
                        value={normal}
                        onChange={(e)=>setNormal(e.target.value)}
                        className="pres-input"
                        variant="outlined"
                        style={{margin:'30px'}}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label={category==1?"Invasive Ductal Carcinoma":"Metastatic Tissue"}
                        value={cancer}
                        onChange={(e)=>setCancer(e.target.value)}
                        className="pres-input"
                        variant="outlined"
                        style={{margin:'30px'}}
                    />


                 <button id="pres-button" onClick={submitPres}>Add Prescription </button>
            </div>
        </div>
        </>
    )
}
