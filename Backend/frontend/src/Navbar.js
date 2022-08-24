import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"marginLeft":"43%","marginRight":"46%"}}
    >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" C id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={{"textAlign":"center"}}>
      <li className="nav-item active">
        <Link className="nav-link" to="/">Upload </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/allthumbnail">Thumnails</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
  )
}

export default Navbar