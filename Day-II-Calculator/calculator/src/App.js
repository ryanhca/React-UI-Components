import React from "react";
import "./App.css";
import "./components/ButtonComponents/Button.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcTotal: 11111,
      expression: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(e.currentTarget.innerHTML);
    if(e.currentTarget.innerHTML === "clear") {
      this.setState(
        {
          calcTotal: 0
        }
      );
    }
  }
  render() {
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <CalculatorDisplay num={this.state.calcTotal}/>
          <div className="btn-wrapper">
            <ActionButton clickfn={this.handleClick} type="wide-btn" value="clear" />
            <ActionButton type="danger-btn divide-btn" value="&divide;" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="num-btn" value="7" />
            <NumberButton type="num-btn" value="8" />
            <NumberButton type="num-btn" value="9" />
            <ActionButton type="danger-btn" value="&times;" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="num-btn" value="4" />
            <NumberButton type="num-btn" value="5" />
            <NumberButton type="num-btn" value="6" />
            <ActionButton type="danger-btn minus-btn" value="&minus;" />
          </div>


          <div className="btn-wrapper">
            <NumberButton type="numbtn" value="1" />
            <NumberButton type="numbtn" value="2" />
            <NumberButton type="numbtn" value="3" />
            <ActionButton type="danger-btn" value="&#x2b;" />
          </div>

          <div className="btn-wrapper">
            <NumberButton type="wide-btn num-btn" value="0" />
            <ActionButton type="danger-btn" value="&#x3d;" />
          </div>

      </div>
    </div>
  );
}
};

export default App;
