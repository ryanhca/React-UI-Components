import React from 'react';
import './Button.css';



const ActionButton = () => {
    return (
        <div className="actionContainer">
            <div className="actionButton divide">÷</div>
            <div className="actionButton times">×</div>
            <div className="actionButton minus">–</div>
            <div className="actionButton plus">+</div>
            <div className="actionButton equal">=</div>
        </div>
    )
}

export default ActionButton;