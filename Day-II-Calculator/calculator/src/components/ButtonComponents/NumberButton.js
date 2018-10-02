import React from 'react';
import './Button.css';


const NumberButton = props => {

    return(
        <div className={`${props.data.color} ${props.data.size} centerText`}>
            <p>{props.data.symbol}</p>
        </div>
    )
}

export default NumberButton;