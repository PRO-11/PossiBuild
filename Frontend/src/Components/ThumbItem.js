import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {useHistory, useLocation} from "react-router-dom"
function ThumbItem(props){
     let history=useHistory();
       const {title,description,thumbnail,videourl}=props
      const handleclick=async()=>{
        console.log("pro")
        history.push({
            pathname: '/player',
                   state: {link:videourl}
        });
      }
        return (
            <div className='my-3' style={{width:'20em'}}>
             <div className="card" >
               <div style={{display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'}}>
  </div>
             <img src={thumbnail} className="card-img-top" alt="..." onClick={handleclick} width="250" height="150"/>
  <div className="card-body">
    <h5 className="card-title" style={{"color":"red"}}>{title}</h5>
    <p className="card-text"  style={{"color":"red"}}>{description}</p>
  </div>
</div>   
            </div>
        )
    }


export default ThumbItem
