import React, { Component } from 'react';

import classes from './App.css';

import Person from './Person/Person';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'


class App extends Component {
  state = {
      persons:[
          {id:'sdjc', name:'Max', age:28},
          {id:'sd', name:'May', age:20},
          {id:'sdsd', name:'Alex',age:23},
      ],
      showPersons:false
  };

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    return this.setState({showPersons:!doesShow})
  };

  nameChangedHandler = (event,id) => {
      // const person = Object.assign({},this.state.persons[personIndex])

     const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
     });

     const person = {
       ...this.state.persons[personIndex]
     };

     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
     this.setState({persons:persons})
  };

  render() {

    let persons = null;
    let btnClass='';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
             return <ErrorBoundary key={person.id}>
                 <Person
               click = {()=>{this.deletePersonHandler(index)}}
               name={person.name}
               age={person.age}
               changed={(event)=>this.nameChangedHandler(event,person.id)}/></ErrorBoundary>
          })}
        </div>
      );
    }
    btnClass = classes.Red;

    const assignedClasses=[]; // "red bold"

    if (this.state.persons.length <=2){
        assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1){
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
           <h1>Hi, I'm a React App</h1>
           <p className={assignedClasses.join(' ')}>This is really working</p>
           <button
             className={btnClass}
             onClick={this.togglePersonHandler}>Toggle Person</button>
             {persons}
         </div>
    );
  }
}

export default App;
