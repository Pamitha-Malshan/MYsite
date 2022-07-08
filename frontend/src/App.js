
import "./Component/main.css";
import Main from './Component/RMain'
import Back from './Component/Main'
import Header from './Component/Header'
import Skill from './Component/Skill'
import Bar from './Component/BarRound'
import AboutUs from './Component/AboutUs'
import Project from './Component/Project'
import Footer from './Component/footer'
import {BrowserRouter,Route, ScrollToTop } from "react-router-dom";







function App() {
  
  return (
    
      <BrowserRouter>
      <div className='back' >
     
       <Header/>
       <Main/>
         <AboutUs/>
     
       <Bar/>
       <Project/>
      
      
       
      
       
       <Back/>
       <Footer/> 
       </div>
       </BrowserRouter>
    
  );
}

export default App;
