import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const App = () => {
  return (
    <div className="app-wrapper">
      <div className="calc-wrapper">
        <CalculatorDisplay total="0"/>
        <ActionButton actionButtonLabel="clear" extraStyles="clearWidth" />
        <ActionButton actionButtonLabel="&divide;" />
        <div className="numbersButtonsDiv">
          
          <NumberButton numberLabel="9" />
          <NumberButton numberLabel="8" />
          <NumberButton numberLabel="7" />
          <NumberButton numberLabel="6" />
          <NumberButton numberLabel="5" />
          <NumberButton numberLabel="4" />
          <NumberButton numberLabel="3" />
          <NumberButton numberLabel="2" />
          <NumberButton numberLabel="1" />
          <NumberButton numberLabel="0" extraStyles="zeroNumberStyles" />
        </div>

        <div className="actionButtonRow">
          <ActionButton actionButtonLabel="&times;" extraStyles="actionButtonWidth"/>
          <ActionButton actionButtonLabel="-" extraStyles="actionButtonWidth"/>
          <ActionButton actionButtonLabel="+" extraStyles="actionButtonWidth"/>
          <ActionButton actionButtonLabel="=" extraStyles="actionButtonWidth"/>
        </div>

      </div>
    </div>
  );
};

export default App;
