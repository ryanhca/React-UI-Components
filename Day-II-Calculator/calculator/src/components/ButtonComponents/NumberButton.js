import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render() {
        return <button className={`btn ${this.props.defaultStyle}`} onClick={this.props.onClick}>{this.props.name}</button>;
    }
};

NumberButton.defaultProps = {
    name: 0,
    defaultStyle: "btn"
};

export default NumberButton;