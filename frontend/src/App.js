import React, { useState } from "react";
import "./Component/main.css";
import Main from "./Component/RMain";
import Back from "./Component/Main";
import Header from "./Component/Header";
import Skill from "./Component/Skill";
import Bar from "./Component/BarRound";
import AboutUs from "./Component/AboutUs";
import Project from "./Component/Project";
import Footer from "./Component/footer";
import Dark from "./Component/darkmode";
import { BrowserRouter, Route, ScrollToTop } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Header />
<div class="background">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <div>
          <center>
            <h5>Cool its {darkMode ? "Dark" : "Light"} Mode </h5>
            <div class="">
              <Main />
              <AboutUs />

              <Bar />
              <Project />

              <Back />
              <Footer />
            </div>
          </center>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
