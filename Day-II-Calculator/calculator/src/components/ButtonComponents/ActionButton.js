import React from 'react';
import './Button.css';


const ActionButtons = (props) => {
    return (
        <div className="ActionContainer">
            <p>{props.text}</p>
        </div>
    );
}

export default ActionButtons;