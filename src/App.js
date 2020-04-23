import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Counter2/Counter2";
import Counter1 from "./Counter1/Counter1";


class App extends React.Component {

    componentDidMount = () => {
        this.restoreState()
    };

    state = {
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
        disabledSetButton: true,
        disabledCountButton: false,
        disabledResetButton: false,
        inputMaxValueError: false,
        inputStartValueError: false,
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('startSettings', stateAsString)
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('startSettings');
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
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
            disabledResetButton: true,
            inputStartValueError: false,
            inputMaxValueError: false,
        });
        if (newValue < 0) {
            this.setState({
                currentValue: "Incorrect value!",
                disabledSetButton: true,
                disabledCountButton: true,
                disabledResetButton: true,
                inputStartValueError: true
            });
        } else if (newValue >= this.state.maxValue) {
            this.setState({
                currentValue: "Incorrect value!",
                inputStartValueError: true,
                inputMaxValueError: true,
                disabledSetButton: true,
            });
        }
    };

    updateNewMaxValue = (newValue) => {
        this.setState({
            maxValue: newValue,
            currentValue: "enter values and press 'set'",
            disabledSetButton: false,
            disabledCountButton: true,
            disabledResetButton: true,
            inputMaxValueError: false,
            inputStartValueError: false,
        });
        if (newValue < 0) {
            this.setState({
                currentValue: "Incorrect value!",
                disabledSetButton: true,
                disabledCountButton: true,
                disabledResetButton: true,
                inputMaxValueError: true
            });
        } else if (newValue <= this.state.startValue) {
            this.setState({
                currentValue: "Incorrect value!",
                inputStartValueError: true,
                inputMaxValueError: true,
                disabledSetButton: true,
            });
        }
    };

    onButtonSetClick = () => {
        this.setState({
            currentValue: this.state.startValue,
            disabledSetButton: true,
            disabledCountButton: false,
            disabledResetButton: false,
        },this.saveState);
    };


    render = () => {


        return (
            <div className="App">
                <span className='installText'>Select counter version </span>
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
