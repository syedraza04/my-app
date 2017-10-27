import React, { Component } from 'react';
import './App.css';
import './Person/charcomponent.css'

import ValidationComponent from './Person/ValidationComponent'
import CharComponent from './Person/CharComponent'

class App extends Component {

  state={
      arrayLength:0,
      arrayValue:['']
  };

  inputChanged = (event) => {
      const inputArrayValue = event.target.value.split('');
      const inputArrayLength = inputArrayValue.length;
      inputArrayValue.join('');
      this.setState({
          arrayValue:inputArrayValue,
          arrayLength:inputArrayLength
      });
  };

  deleteInputHandler = (index) => {
      const array = this.state.arrayValue;
      array.splice(index,1);
      const arrayLength = array.length;
      this.setState({
          arrayValue:array,
          arrayLength:arrayLength
      });
  };

  render() {
      let charArray = null;
      charArray = (
        <div>
          {this.state.arrayValue.map((input,index)=>{
             return <CharComponent
                      value = {input}
                      key={index}
                      click = {()=>{this.deleteInputHandler(index)}}/>
          })}
        </div>
      );
      return (
      <div className="App">
        <input type="text" onChange={this.inputChanged}/>
        <p>Input Text length: {this.state.arrayLength}</p>
        <ValidationComponent length = {this.state.arrayLength}/>
        {charArray}
      </div>
    );
  }
}

export default App;
