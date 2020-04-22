import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Counter2/Counter2";
import Counter1 from "./Counter1/Counter1";


class App extends React.Component {

    state = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
        disabledSetButton: true,
        disabledCountButton: false,
        disabledResetButton: false
    };

    reset = () => {
        this.setState({
                currentValue: this.state.startValue,
                disabledCountButton: false
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
                disabledCountButton: true
            });
        }
    };

    updateNewStartValue = (newValue) => {
        this.setState({
            startValue: newValue,
            currentValue: "enter values and press 'set'",
            disabledSetButton: false,
            disabledCountButton: true,
            disabledResetButton: false
        });
    };

    updateNewMaxValue = (newValue) => {
        this.setState({
            maxValue: newValue,
            currentValue: "enter values and press 'set'",
            disabledSetButton: false,
            disabledCountButton: true,
            disabledResetButton: false
        })
    };

    onButtonSetClick = () => {
        this.setState({
            currentValue: this.state.startValue,
            disabledSetButton: true
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
                                                                onButtonSetClick={this.onButtonSetClick}

                />}/>
                <Route path='/counter2' render={() => <Counter2/>}/>
            </div>
        );
    }
}

export default App;
