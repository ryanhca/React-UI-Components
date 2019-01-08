import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props){
    super(props);
    this.numbers = [
        {buttonStyle:"number-button", text:1}, 
        {buttonStyle:"number-button", text:2}, 
        {buttonStyle:"number-button", text:3}, 
        {buttonStyle:"number-button", text:4},
        {buttonStyle:"number-button", text:5},
        {buttonStyle:"number-button", text:6},
        {buttonStyle:"number-button", text:7},
        {buttonStyle:"number-button", text:8},
        {buttonStyle:"number-button", text:9},
        {buttonStyle:"operator-button", text:'÷'},
        {buttonStyle:"operator-button", text:'x'},
        {buttonStyle:"operator-button", text:'-'},
        {buttonStyle:"operator-button", text:'+'},
        {buttonStyle:"operator-button", text:'='},
      ];
    this.action = [{actionButtonStyle:"zero-button", text:0}, {actionButtonStyle:"clear-button", text:"clear"}];
    this.state = {total: 0}
    console.log(this.numbers[0]);
    console.log(this.action[0]);
  }

  render(){
    return(
      <div className="app">
         <div className="calculator">
           <CalculatorDisplay state ={this.state}/>
           <div className="buttons">
             <ActionButton action={this.action[1]}/>
             <NumberButton number={this.numbers[9]}/>
             <NumberButton number={this.numbers[6]}/>
             <NumberButton number={this.numbers[7]}/>
             <NumberButton number={this.numbers[8]}/>
             <NumberButton number={this.numbers[10]}/>
             <NumberButton number={this.numbers[3]}/>
             <NumberButton number={this.numbers[4]}/>
             <NumberButton number={this.numbers[5]}/>
             <NumberButton number={this.numbers[11]}/>
             <NumberButton number={this.numbers[0]}/>
             <NumberButton number={this.numbers[1]}/>
             <NumberButton number={this.numbers[2]}/>
             <NumberButton number={this.numbers[12]}/>
             <ActionButton action={this.action[0]}/>
             <NumberButton number={this.numbers[13]}/>
           </div>
         </div>
     </div>
    );
  }
}

export default App;
