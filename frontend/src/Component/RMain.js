import React, { useState } from "react";
import "./main.css";


export default function App() {
 
  return (
    <div >
     
<center>
  <br/>
  <br/>
  
  

 <section id="home">
  <div class="container">
  <div class="row">
  <div class="col ">
            <img  className="img" src={require('../Image/profile.jpg')}/>
    </div>
    <div class="col order-1">
                    <div className="">
                    <h1>I'm Pamitha Malshan </h1>
                   
                    <h6>Software Engineer | Full Stack Developer</h6><br/>
                    <h6>Bsc (Hons) Software Engineering Undergraduate at </h6>
                    <h6> Sri Lanka Institute of Information technology (SLIIT)</h6>
                    <br/>
                    <a className='btn btn-primary' rel="noreferrer" target="_blank" href={process.env.PUBLIC_URL + `/uploads/pamitha.pdf`}>Download My CV <i class="fa-solid fa-download"></i></a>
               
                    </div>
    </div>
    
    
  </div>
</div>
<br/>
<br/>
<div class="container">
  <div class="row">
    <div class="col">
    <img className="img" src={require('../Image/facebook.png')} style={{width:"100px", height:"100px", borderRadius:"150px", marginLeft:"0px"}} />
    </div>
    <div class="col order-1">
    <img className="img" src={require('../Image/instagram.jpg')} style={{width:"100px", height:"100px", borderRadius:"150px", marginLeft:"0px"}}/>
    </div>
    <div class="col order-2">
    <img className="img" src={require('../Image/git.png')} style={{width:"100px", height:"100px", borderRadius:"150px", marginLeft:"0px"}}/>
    </div>
    <div class="col order-3">
    <img className="img" src={require('../Image/linkedin.png')} style={{width:"100px", height:"100px", borderRadius:"150px", marginLeft:"0px"}}/>
    </div>
    <div class="col order-4">
    <img className="img" src={require('../Image/emailimage.jpg')} style={{width:"100px", height:"100px", borderRadius:"150px", marginLeft:"0px"}}/>
    </div>
  </div>
</div>
    





</section>

        
    </center>   
        
    </div>
    
  );
}
