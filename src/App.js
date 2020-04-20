import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Counter2/Counter2";
import Counter1 from "./Counter1/Counter1";

class App extends React.Component {

    state = {
        initialValue: 0,
        counterValueMax: 5
    };

    reset = () => {
        this.setState({
            initialValue: 0
            }
        )
    };

    changeCounterValue = () => {
        let newInitialValue = this.state.initialValue + 1;
        this.setState({
            initialValue: newInitialValue
        })
    };

    render = () => {


        return (
            <div className="App">
                <span className='installText'>Select version counter</span>
                <Navbar/>
                <Route path='/counter1' render={() => <Counter1 state={this.state}
                                                                reset={this.reset}
                                                                changeCounterValue={this.changeCounterValue}
                />}/>
                <Route path='/counter2' render={() => <Counter2/>}/>
            </div>
        );
    }
}

export default App;
