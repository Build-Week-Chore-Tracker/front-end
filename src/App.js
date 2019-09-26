import React, {useState} from 'react';
import './App.css';
import SignupForm from "./components/SignupForm";
import loginForm from "./components/LoginForm";
import Chores from "./components/Chores";
import Family from "./components/Family";
import NavBar from "./components/NavBar";
import Rewards from "./components/Rewards";
import { Route } from 'react-router-dom';
import Childreg from "./components/Childreg";

function App() {
  const [user, setUser] = useState([])
        console.log("user", user)
        
        
  return (
    
    <div className="App">
      
      <Route   path="/" component={NavBar} />
      <Route  exact path="/signup" render={props => <SignupForm {...props} user={user} setUser={setUser} />}/>
      <Route  exact path="/login" component={loginForm} />
      <Route  exact path="/" render={props => <Family {...props} user={user} setUser={setUser} />}/>
      <Route exact path="/childreg" render={props => <Childreg {...props} user={user} setUser={setUser}/>}/>
      <Route  exact path="/chores" component={Chores}/>
      <Route exact path = "/rewards" component={Rewards} />
      
    </div>
    
  );
}

export default App;