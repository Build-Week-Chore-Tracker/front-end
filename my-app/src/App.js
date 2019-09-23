import React from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import loginForm from "./components/LoginForm"
import Dashboard from "./Dashboard"
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/login" component={loginForm} />
      <Route exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
