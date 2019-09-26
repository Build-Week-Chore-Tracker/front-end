import React, {useState} from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Chores from "./components/Chores";
import Family from "./components/Family";
import NavBar from "./components/NavBar";
import Rewards from "./components/Rewards";
import { Route } from 'react-router-dom';
import Childreg from "./components/Childreg";

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "" 
  })
        console.log("userapp", user)
        
        
  return (
    
    <div className="App">
      
      <Route   path="/" component={NavBar} />
      <Route  exact path="/signup" render={props => <SignupForm {...props} user={user} setUser={setUser} />}/>
      <Route  exact path="/" render={props => <LoginForm {...props}  />}/>
      <Route  exact path="/family" render={props => <Family {...props}  />}/>
      <Route exact path="/childreg" render={props => <Childreg {...props} user={user} setUser={setUser}/>}/>
      <Route  exact path="/chores" component={Chores}/>
      <Route exact path = "/rewards" component={Rewards} />
      
    </div>
    
  );
}

export default App;
