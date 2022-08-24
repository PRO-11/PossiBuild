import React from 'react'
import './upload.css'
import {useHistory} from "react-router-dom"

function Upload() {
 
  let history=useHistory();
  const handleSubmit = event => {
  };
  return (
      
<div class="body-content">
  <div class="module">
    <form class="form" action='https://possibuild-internship.herokuapp.com/submit' method='POST' encType='multipart/form-data' onSubmit={handleSubmit} >
      <div class="alert alert-error"></div>
      <input type="text" placeholder="Title" name="title" required />
      <input type="text" placeholder="Description" name="description" required />
      <div class="avatar"><label>Select Thumbnail: </label><input type="file" name="image" accept="image/*" required /></div>
      <div class="avatar"><label>Select Video: </label><input type="file" name="video" accept="video/*" required /></div>
      <button type="submit" className='btn btn-primary' >Submit</button>
    </form>
  </div>
</div>
  )
}

export default Upload