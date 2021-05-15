import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className ="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Arindam Samanta</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon ={faBars} style={{ color: "#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About me</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Academics</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Achievements</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">contacts</a>
              </li>
              
            </ul>
            
          </div>
        </div>
    </div>    
      </nav>
    )
}

export default Navbar
