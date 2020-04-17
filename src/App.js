import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter1 from "./Counter1/Counter1";
import Counter2 from "./Counter2/Counter2";

function App() {
  return (
    <div className="App">
      <Navbar/>
            <Route path='/counter1' render={() => <Counter1/>}/>
            <Route path='/counter2'  render={() => <Counter2/>}/>
    </div>
  );
}

export default App;
