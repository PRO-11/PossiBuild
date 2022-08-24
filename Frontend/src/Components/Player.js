import React from 'react'

import ReactPlayer from 'react-player'
import { useState } from 'react';
import { useEffect } from 'react'
import { useLocation} from "react-router-dom"

function Player() {
  const location=useLocation();
  const [url,seturl]=useState()
  useEffect(() => {
   if(location.state!==undefined)
   seturl(location.state.link);
  
   
  }, [])
  
  return (
    <ReactPlayer
    url={url}
    className='react-player'
    playing
    width='100%'
    height='100%'
  />
    // <video src={url} width="750" height="500" controls>
    // </video>
   
  )
}

export default Player