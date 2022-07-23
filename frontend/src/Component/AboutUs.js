import react from 'react';
import "./main.css";

function AboutUs(){


    return(
        <div class="aboutusbackground">
            <br/>
            <br/>
            <br/>
            <section id="about">
            <center>
            <p class="head">About me</p>
            <div class="container">
            <div class="aboutUs">
              <div class="row">
              <img src={require('../Image/about.jpeg')} className="photo"/>
                  
             
            <div class="col order-2">
            <div style={{padding:"5%"}}>
                            <h2>I'm Pamitha Malshan Perera,</h2><br/>
                            <h5>I am a Software Engineering Undergraduate at Sri Lanka  Institute of Information Technology reading a BSc(Hons) Information Technology Specialised in Software Engineer degree. I did 
                                my G.C.E Advance Level Exam in Commers stream in President's College Kotte.  </h5>

                            <h5>I am a web developer, mobile application developer and full-stack developer. I
                                always try to come up acceptable solution for given
                                challenge in my best of knowledge and interested in software
                                engineering platform with multi-tasking, Teamwork and time
                                management skills. always looking challenging aspect to 
                                motivate and colourfull to my software engineer career.
                            </h5>
                        </div>
              </div>
           </div>
           </div>
        </div>

  
                        
                         
         
            </center>
            </section>
        </div>
    )
}

export default AboutUs;