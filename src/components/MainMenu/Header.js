//Header.js Module
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  var MenuNames = ["Home", "About", "Services", "Itservices", "Contact", "Myclass", "Lifecycle",
    "Restapi", "RB", "Signup", "Rrc", "RHuseState", "RHuseEffect", "Pagination", 
    "Hooksuser", "HooksSignup", "HooksRedux"]

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light"
      style={
        {
          backgroundColor: '#27477a',
          borderBottom: '0.5px white solid',
          borderTop: '0.5px white solid',
        }
      }>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          {/*  
       <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/itservices">Itservices</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/myclass">Myclass</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/lifecycle">Lifecycle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/restapi">Restapi</Link>
        </li>
      </ul>  */}

          <ul className="navbar-nav ">
            {
              MenuNames.map((data, i) =>

                <li className="nav-item px-3" key={i}>
                  <Link className="nav-link text-white line-gap-10" to={`/${data.toLowerCase()}`}>{data}</Link>
                </li>)
            }
          </ul>

        </div>
      </div>
    </nav>

  </>)
}
export default Header;