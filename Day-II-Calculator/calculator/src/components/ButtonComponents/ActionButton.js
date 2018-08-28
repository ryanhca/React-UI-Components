import React from 'react';
import './Button.css';

const ActionButtons = (props) => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    )
}

export default ActionButtons;