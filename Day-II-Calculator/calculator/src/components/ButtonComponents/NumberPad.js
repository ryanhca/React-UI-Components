import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const number = [ 
    7,
    8,
    9,  
    4,
    5,
    6, 
    1,
    2,
    3,
    String.fromCharCode(247),
    "x",
    "-",
    "+",
    "=" 
];

const operators = number.splice(number.length -5, 5);

var buttonArray = [];
for (let i = 0; i < number.length; i++) {
    buttonArray.push({
        buttonStyle: "number",
        text: number[i]
    });
}
var operationsArr = [];
for (let i = 0; i < operators.length; i++) {
    operationsArr.push({
        buttonStyle: "operator",
        text: operators[i]
    })
}

const NumberPad = () => {
    return (
        <div className='button-container'>
            <div className="numPad">
                <ActionButton class='action' text='clear' />
                {buttonArray.map(item => {
                    return <NumberButton button={item} />;
                })}
            <ActionButton class='action' text='0' />
        </div>
            <div className='operators'>
                {operationsArr.map(item => {
                    return <NumberButton button={item} />;
                })}
            </div>
        </div>
    );
};

export default NumberPad;