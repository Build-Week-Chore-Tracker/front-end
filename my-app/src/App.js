import React from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import loginForm from "./components/LoginForm"
import Chores from "./components/Chores"
import Family from "./components/Family"
import NavBar from "./components/NavBar"
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route   path="/" component={NavBar} />
      <Route  exact path="/signup" component={SignupForm} />
      <Route  exact path="/login" component={loginForm} />
      
      <Route  exact path="/" component={Family}/>
      <Route  exact path="/chores" component={Chores}/>
      
    </div>
  );
}

export default App;
