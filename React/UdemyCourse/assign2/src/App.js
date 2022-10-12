import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    pInput: 'teststst'
  }

  inputChange = (event) => {
    this.setState({
      pInput: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>working.???</h1>
        <input type="text"
        onChange={this.inputChange}
        value={this.state.pInput} />
        <p>Length of input: {this.state.pInput.length}</p>
      </div>
    );
  }
}

export default App;
