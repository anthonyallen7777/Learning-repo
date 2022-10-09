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
    otherState: 'some other value'
  }

  switchNameHandler = () => { //es6 function
    // console.log('Was clicked!');
    //DONT DO THIS: this.state.persons[0].name = 'Jeff';
    this.setState({
      persons: [
        { name: 'Sam', age: 32 },
        { name: 'Taylor', age: 41 },
        { name: 'Ted', age: 65 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;