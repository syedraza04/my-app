import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
      persons:[
          {name:'Max', age:28},
          {name:'May', age:20},
          {name:'Alex',age:23},
      ]
  };

  switchNameHandler = (name,age) => {
      this.setState({
          persons:[
              {name:name, age:age},
              {name:'May', age:20},
              {name:'Alex',age:27},
          ]
      });
  };
    nameChangedHandler = (event) => {
        console.log('Hello Working');
        this.setState({
            persons:[
                {name:'Max', age:29},
                {name:event.target.value, age:20},
                {name:'Alex',age:27},
            ]
        });
    };

  render() {
    const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
            style={style}
            onClick={() => this.switchNameHandler('Maximillian',88)}>Button</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Maximillian',88)}
          changed={this.nameChangedHandler}
          >My hobby is Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
     );
  }
}

export default App;
