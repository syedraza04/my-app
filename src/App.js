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
          <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
          <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Maximillian', 88)}
                    changed={this.nameChangedHandler}
                >My hobby is Racing</Person>
          <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
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
