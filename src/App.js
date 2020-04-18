import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Counter2/Counter2";
import Counter1 from "./Counter1/Counter1";

const App = () => {
    return (
        <div className="App">
            <span className='installText'>Select version counter</span>
            <Navbar/>
            <Route path='/counter1' render={() => <Counter1/>}/>
            <Route path='/counter2' render={() => <Counter2/>}/>
        </div>
    );
}

export default App;
