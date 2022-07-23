import "./main.css";

function Project(){

    return(
        <div>
          <section id='project'>
         <center>
            <br/>
            <p class="head">Check Out My Project</p>

            <div class="container">
               <div class="row">
                 <div class="col">
                 <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>4th Year Research Management</h5> 
                          <h5>Tool</h5>
                          <h5>(MERN)</h5>
                          <a href='https://github.com/LankaniDeSilva/ApplicationFramework'>
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </a>
                          </center>
                        </div>
                 </div>
               <div class="col order-5">
               <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>Online Tutorial System</h5> 
                          <h5>(PHP- Laravel)</h5>
                          <a href='https://github.com/SLIIT-FacultyOfComputing/itp_project-itp2021_s2_b02_g14'>
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </a>
                          </center>
                        </div>
               </div>
               <div class="col order-1">
               <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>Online Agriculture System</h5> 
                          <h5>(MERN,3rd Party Services)</h5>
                          <a href="https://github.com/LankaniDeSilva/OnlinePola">
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </a>
                          </center>
                        </div>
               </div>
             </div>
           </div>

           <div class="container">
  <div class="row">
    <div class="col">
    <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>Online Food Delivery System</h5> 
                          <h5>Mobile Application</h5>
                          <h5>(Java,SQLite)</h5>
                          <a href="https://github.com/IT20113872/Tesla_2.0">
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </a>
                          </center>
                        </div>
    </div>
    <div class="col order-5">
    <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>On going....</h5> 
                         
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </center>
                        </div>
    </div>
    <div class="col order-1">
    <div className='project'>
                          <img src={require('../Image/project.png')} style={{width:"105%", height:"105%", marginLeft:"0px"}} />
                          <center>
                          <h5>On going....</h5> 
                         
                          <button type="button" class="btn btn-primary">Check Out My Project <i class="fa-brands fa-github"></i></button>
                          </center>
                        </div>
    </div>
  </div>
</div>


            
            </center>
            </section>
        </div>
    )
}

export default Project;