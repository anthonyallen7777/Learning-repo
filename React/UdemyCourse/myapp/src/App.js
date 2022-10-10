import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ren', age: 32 },
      { name: 'Taylor', age: 43 },
      { name: 'Woody', age: 65 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => { //es6 function
    // console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = 'Jeff';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Taylor', age: 41 },
        { name: 'Ted', age: 65 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ren', age: 32 },
        { name: event.target.value, age: 43 },
        { name: 'Woody', age: 65 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
            name={person.name}
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={buttonStyle}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;