import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';






class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {total: 0, list: [0], display: "0", lastChar : "", characters :["*", "+", "/", "-"]}
    this.addToDisplay = this.addToDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this); 
    this.equalDisplay = this.equalDisplay.bind(this); 
    this.checkCharacterLength = this.checkCharacterLength.bind(this); 
    
  }
  
  addToDisplay(item){
    //on click of one of the buttons we will add its text/prop to the display. it will also add to the list property in the state object.
    
    if(this.state.display === "0" && item !== "*" && item !== "/" && item !== "+"){
      this.state.display = item; 
      this.state.lastChar = item; 
    } else if(this.state.characters.includes(item) && !this.state.characters.includes(this.state.lastChar)){
      this.state.display += item; 
      this.state.lastChar = item; 
    } else if (!this.state.characters.includes(item)){
      this.state.display += item;
      this.state.lastChar = item; 
    } 
    
    this.checkCharacterLength()
    document.getElementById('onScreen').innerHTML =this.state.display
  }

  clearDisplay() {
    this.state.display = "0";
    document.getElementById('onScreen').innerHTML = "0"
    this.setState(this.state);
    document.getElementById('onScreen').style.fontSize = '70px';

  }
  equalDisplay() {
    
    if(this.state.characters.includes(this.state.lastChar)){
      this.state.display = this.state.display.substring(0, this.state.display.length -1)
    }
    console.log(eval(this.state.display));
    this.state.display = eval(this.state.display);
    document.getElementById('onScreen').innerHTML =this.state.display
    this.checkCharacterLength()
  }

  checkCharacterLength() {
    if(this.state.display.length >= 12){
      document.getElementById('onScreen').style.fontSize = '20px';
    }
  }


  render(){

    return (
      <div className = "main-div">
        <CalculatorDisplay />
        <NumberButton one= "1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"
         handleButtonClick = {item => this.addToDisplay(item) } handleClearClick = {this.clearDisplay}  handleEqualClick = {this.equalDisplay}/>
      </div>
    );

  }
}

export default App;
