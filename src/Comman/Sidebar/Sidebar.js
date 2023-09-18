import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-content">
            <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <Link className="nav-link " to="index.html">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
      <i className="bi bi-menu-button-wide"></i><span>Services</span><i className="bi bi-chevron-down ms-auto"></i>
    </Link>
    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
    <li>
        <Link to="/add-services">
          <i className="bi bi-circle"></i><span>Service</span>
        </Link>
      </li>
      <li>
        <Link to="/add-category">
          <i className="bi bi-circle"></i><span>category</span>
        </Link>
      </li>
    
    </ul>
  </li>
 

  <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin-profile">
      <i className="bi bi-person"></i>
      <span>Profile</span>
    </Link>
  </li>

  
  <li className="nav-item">
    <Link className="nav-link collapsed" to="/contact">
      <i className="bi bi-envelope"></i>
      <span>Contact</span>
    </Link>
  </li>

  {/* <li className="nav-item">
    <Link className="nav-link collapsed" to="pages-register.html">
      <i className="bi bi-card-list"></i>
      <span>Register</span>
    </Link>
  </li> */}

  <li className="nav-item">
    <Link className="nav-link collapsed" to="/">
      <i className="bi bi-box-arrow-in-right"></i>
      <span>Log Out</span>
    </Link>
  </li>
  

</ul>

</aside>
            </div>
        </div>
    )
}