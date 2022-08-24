import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import ThumbItem from './ThumbItem'
function Thumbnails() {
    const [data,setdata]=useState([]);
    useEffect(async () => {
  
        const response1 = await fetch("https://possibuild-internship.herokuapp.com/allthumbnails", {
      method: 'GET',
      headers: {
         'Content-Type':'application/json'
      }  
  })
  const json = await response1.json();
  setdata(json);
             },[]);
  return (
    <div className='container'>
    <div className='row'>
        {data.map((ele)=>{
            return <div  className="col md-4 my-2"  key={ele._id}>
          <ThumbItem title={ele.title} description={ele.description} thumbnail={ele.thumbnail.url} videourl={ele.video.url}/>
            </div>
        })}
    </div>
    </div>
  )
}

export default Thumbnails