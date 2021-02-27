import React from "react";
import './App.css';
import Log from './component/log'
import Navbar from './component/navbar'
import Register from './component/register'
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";




function App() {
  return (
    <div >
      <Router>
        
         <Navbar />
         <Switch>
         <Route exact path ="/" component = {Log} />
         
         <Route exact path ="/signup" component = {Register} />
         

       </Switch>

      </Router>
    </div>
  );
}



export default App;
