import React from 'react';
import style from "../Counter1/Counter1.module.css";
import OutputBlock from "./OutputBlock/OutputBlock";
import SettingsBlock from "./SettingsBlock/SettingsBlock";


class Counter2 extends React.Component {

    componentDidMount = () => {
        this.restoreState()
    };

    state = {
        currentValue: 0,
        startValue: 0,
        maxValue: 5,
        disabledSetButton: true,
        disabledCountButton: true,
        inputMaxValueError: false,
        inputStartValueError: false,
        isHidden: false
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('startSettingsCounter2', stateAsString)
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('startSettingsCounter2');
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
            disabledSetButton: false,
            inputStartValueError: false,
            inputMaxValueError: false,
        });
        if (newValue < 0) {
            this.setState({
                disabledSetButton: true,
                inputStartValueError: true
            });
        } else if (newValue >= this.state.maxValue) {
            this.setState({
                inputStartValueError: true,
                inputMaxValueError: true,
                disabledSetButton: true,
            });
        }
    };

    updateNewMaxValue = (newValue) => {
        this.setState({
            maxValue: newValue,
            disabledSetButton: false,
            inputMaxValueError: false,
            inputStartValueError: false,
        });
        if (newValue < 0) {
            this.setState({
                disabledSetButton: true,
                inputMaxValueError: true
            });
        } else if (newValue <= this.state.startValue) {
            this.setState({
                inputStartValueError: true,
                inputMaxValueError: true,
                disabledSetButton: true,
            });
        }
    };

    onButtonSetClick = () => {
        this.setState({
            isHidden: false,
            currentValue: this.state.startValue,
            disabledCountButton: false
        }, this.saveState);
    };

    showSettingsBlock = () => {
        this.setState({
            isHidden: true
        }, this.saveState);
    };


    render = () => {

        return (
            <div className={style.counterWrapper}>
                {!this.state.isHidden && <OutputBlock state={this.state}
                                                      showSettingsBlock={this.showSettingsBlock}
                                                      reset={this.reset}
                                                      changeCounterValue={this.changeCounterValue}

                />}
                {this.state.isHidden && <SettingsBlock state={this.state}
                                                       onButtonSetClick={this.onButtonSetClick}
                                                       updateNewStartValue={this.updateNewStartValue}
                                                       updateNewMaxValue={this.updateNewMaxValue}
                />}
            </div>
        );
    }
}

export default Counter2;
