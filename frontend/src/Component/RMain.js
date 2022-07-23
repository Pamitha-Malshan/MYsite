import React, { useState } from "react";
import "./main.css";

export default function App() {
  return (
    <div>
      <center>
        <br />
     

        <section id="home">
          <div class="">
            <div class="row">
              <img className="DP" src={require("../Image/profile.jpg")} />

              <div class="col ">
                <br />
                <br />
                <div className="">
                  <h1>I'm Pamitha Malshan </h1>

                  <h6>Software Engineer | Full Stack Developer</h6>
                  <br />
                  <h6>Bsc (Hons) Software Engineering Undergraduate at </h6>
                  <h6>
                    {" "}
                    Sri Lanka Institute of Information technology (SLIIT)
                  </h6>
                  <br />
                  <a
                    className="btn btn-primary"
                    rel="noreferrer"
                    target="_blank"
                    href={process.env.PUBLIC_URL + `/uploads/pamitha.pdf`}
                  >
                    Download My CV <i class="fa-solid fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
      
         
          <center>
            <div class="container">
              <div class="row">
                <div class="col order-2">
                  <img
                    className="socialmedia-icon"
                    src={require("../Image/facebook.png")}
                  />
                </div>
                <div class="col order-2">
                  <img
                    className="socialmedia-icon"
                    src={require("../Image/instagram.jpg")}
                  />
                </div>
                <div class="col order-2">
                  <img
                    className="socialmedia-icon"
                    src={require("../Image/git.png")}
                  />
                </div>
                <div class="col order-2">
                  <img
                    className="socialmedia-icon"
                    src={require("../Image/linkedin.png")}
                  />
                </div>
                <div class="col order-2">
                  <img
                    className="socialmedia-icon"
                    src={require("../Image/emailimage.jpg")}
                  />
                </div>
              </div>
            </div>
          </center>
        </section>
      </center>
    </div>
  );
}
