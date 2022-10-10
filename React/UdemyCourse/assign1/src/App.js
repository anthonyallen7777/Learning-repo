import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import * as UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'fkUser1';
  }
}

function App() {
  return (
    <div className="App">
    <h1>Is this working?</h1>
    <UserInput />
    <UserOutput.output1 />
    <UserOutput.output2 />
    </div>
  );
}

export default App;