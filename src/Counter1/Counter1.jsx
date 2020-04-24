import React from 'react';
import style from './Counter1.module.css';
import SettingsBlock from "./SettingsBlock/SettingsBlock";
import OutputBlock from "./OutputBlock/OutputBlock";


class Counter1 extends React.Component {

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
            <div className={style.counterWrapper}>
                <SettingsBlock state={this.state}
                               updateNewMaxValue={this.updateNewMaxValue}
                               updateNewStartValue={this.updateNewStartValue}
                               onButtonSetClick={this.onButtonSetClick}
                />
                <OutputBlock state={this.state}
                             changeCounterValue={this.changeCounterValue}
                             reset={this.reset}/>
            </div>
        );
    }
};

export default Counter1;
