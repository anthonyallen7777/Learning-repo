import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    pInput: 'teststst'
  }

  inputChange = (event) => {
    this.setState({
      pInput: event.target.value
    });
  }

  deleteChar = (charIndex) => {
    // let tempInput = [...this.state.pInput];
    const tempInput = this.state.pInput.split('');
    tempInput.splice(charIndex, 1);
    //tempInput = tempInput.join('');
    const upInput = tempInput.join('');
    this.setState({pInput: upInput});
  }

  render() {
    return (
      <div className="App">
        <h1>working.???</h1>
        <input type="text"
        onChange={this.inputChange}
        value={this.state.pInput} />
        <p>Length of input: {this.state.pInput.length}</p>
        <Validation inputLength={this.state.pInput.length} />
        <Char 
        characters={this.state.pInput}
        deleteCharacter={this.deleteChar} />
      </div>
    );
  }
}

export default App;
