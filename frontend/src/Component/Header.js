import React from "react";
import {Link} from 'react-scroll'

function Header() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
  <div class="container-fluid ">
    <a class="navbar-brand " href="#">
    <img src={require('../Image/icon.jpg')} style={{width:"80px", height:"80px", borderRadius:"150px", marginRight:"20px"}} />

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
     
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        
          <Link class="nav-link" to="home" smooth={true} durayion={1000}><h5 className="nav">Home</h5></Link>
        </li>
        <li class="nav-item">
         
          <Link class="nav-link" to="about" smooth={true} durayion={1000}><h5 className="nav">About me</h5></Link>
        </li>
        <li class="nav-item">
         
          <Link class="nav-link" to="language" smooth={true} durayion={1000}><h5 className="nav">Languages</h5></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="project" smooth={true} durayion={1000}><h5 className="nav">Project</h5></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


      
     
    </div>
  );
}

export default Header;
