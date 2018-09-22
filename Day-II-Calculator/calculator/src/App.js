import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalDisplay from './components/DisplayComponents/CalculatorDisplay';

//display calculator app
//data object holds values for all buttons
const data = {
  clear: "clear",
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  divide: "\xF7",
  multiply: "\xD7",
  subtract: "\u2013",
  add: "+",
  equals: "=", 
}
const App = () => {
  return (
    <div>
      <CalDisplay data={data} displayStyle="black-box" />
      <ActionButton data={data} />
    </div>
  );
};

export default App;
