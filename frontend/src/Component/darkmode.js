import React, { useState } from "react";

import "./styles.css";

//☀︎ ☽
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
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
        <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>

        <table>
            <tr>
                <th>
                    <h1>I am Pamitha Malshan</h1>
                    <h4>Software Engineer | Full Stack Developer</h4>
                </th>
                <th>
                <img src={require('../Image/profile.jpg')} style={{width:"250px", height:"250px", borderRadius:"80px", border:"6px solid blue", margin:"60px"}}/>
                </th>
            </tr>
        </table>

        </center>
      </div>
    </div>
  );
}
