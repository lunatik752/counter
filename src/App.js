import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Counter2/Counter2";
import Counter1 from "./Counter1/Counter1";
import style from "./Counter1/OutputBlock/OutputValue/OutputValue.module.css";

class App extends React.Component {

    state = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
        counterClass: style.outputValue
    };

    reset = () => {
        this.setState({
                currentValue: this.state.startValue,
                counterClass: style.outputValue
            }
        )
    };

    changeCounterValue = () => {
        let newCurrentValue = this.state.currentValue + 1;
        this.setState({
            currentValue: newCurrentValue
        });
        if (this.state.currentValue === this.state.maxValue - 1) {
            this.setState({
                    counterClass: style.outputValueMax
                }
            )
        }
    };

    updateNewStartValue = (newValue) => {
        this.setState({
            startValue: newValue,
            currentValue: "enter values and press 'set'",
            counterClass: style.outputValueText,
        })
    };

    updateNewMaxValue = (newValue) => {
        this.setState({
            maxValue: newValue,
            currentValue: "enter values and press 'set'"
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
                                                                updateNewStartValue={this.updateNewStartValue}
                                                                updateNewMaxValue={this.updateNewMaxValue}

                />}/>
                <Route path='/counter2' render={() => <Counter2/>}/>
            </div>
        );
    }
}

export default App;
