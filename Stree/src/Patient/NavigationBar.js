import React from 'react'
import logo from '../assets/Stree_logo.png'

export default function NavigationBar(props) {
    return (
        <div style={{height:'70px',width:'100%',boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.3)",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
            <img src={logo} style={{height:'60px',width:'auto',margin:'0px 30px'}}/>
            <div style={{color:'#ff58c9',fontWeight:"500",fontSize:'26px',marginRight:'30px'}}>
                <div style={{cursor:'pointer'}}>Dashboard</div>
            </div>
        </div>
    )
}
