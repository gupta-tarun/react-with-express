import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  componentDidMount() {
    
  }
  render(){
    return(
      <div className="App">
        <h1> Hello, World! How are you , my react is working </h1>
      </div>
    );
  }
}

export default hot(module)(App);