import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
      persons:[
          {name:'Max', age:28},
          {name:'May', age:20},
          {name:'Alex',age:23},
      ],
      showPersons:false
  };

  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    return this.setState({showPersons:!doesShow})
  };

  render() {
    const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
             return <Person
               click = {()=>{this.deletePersonHandler(index)}}
               name={person.name}
               age={person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
           style={style}
           onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
     );
  }
}

export default App;
