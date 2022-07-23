import React, { useState } from "react";
import "./Bar.css";

export default function App() {
  return (
    <div>
      <br />

      <section id="language">
        <center>
          <p class="head">Languages</p>

          <div class="container">
            <div class="row">
              <div class="col">
                <div class="sod">
                  <div class="progress blue ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">95%</div>
                  </div>
                  <center>
                    <br />
                    <h4>HTML</h4>
                  </center>
                </div>
              </div>
              <div class="col order-1">
                <div class="sod">
                  <div class="progress blue ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">95%</div>
                  </div>
                  <center>
                    <br />
                    <h4>CSS</h4>
                  </center>
                </div>
              </div>
              <div class="col order-2">
                <div class="sod">
                  <div class="progress green ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>JavaScript</h4>
                  </center>
                </div>
              </div>
              <div class="col order-3">
                <div class="sod">
                  <div class="progress green ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>C</h4>
                  </center>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col order-1">
                <div class="sod">
                  <div class="progress green ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>React JS</h4>
                  </center>
                </div>
              </div>
              <div class="col order-1">
                <div class="sod">
                  <div class="progress green ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Node JS</h4>
                  </center>
                </div>
              </div>
              <div class="col order-2">
                <div class="sod">
                  <div class="progress green ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>PHP(Laravel)</h4>
                  </center>
                </div>
              </div>
              <div class="col order-3">
                <div class="sod">
                  <div class="progress yellow ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">65%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Koa</h4>
                  </center>
                </div>
              </div>
            </div>
          </div>

          <br />
          <p class="head">Professional Skill</p>

          <div class="container">
            <div class="row">
              <div class="col">
                <div class="sod">
                  <div class="progress blue ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">95%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Team Work</h4>
                  </center>
                </div>
              </div>
              <div class="col order-1">
                <div class="sod">
                  <div class="progress pink ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Leadership</h4>
                  </center>
                </div>
              </div>
              <div class="col order-2">
                <div class="sod">
                  <div class="progress pink ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Communication</h4>
                  </center>
                </div>
              </div>
              <div class="col order-3">
                <div class="sod">
                  <div class="progress pink ">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">75%</div>
                  </div>
                  <center>
                    <br />
                    <h4>Problem Solving</h4>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
}
