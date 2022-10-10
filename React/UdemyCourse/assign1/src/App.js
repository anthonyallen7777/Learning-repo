import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import * as UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'fkUser1',
    password: 'securepassword123'
  }

  inputChangHandler = (event) => {
    if (event.target.type == 'text') {
      this.setState({
        userName: event.target.value
      });
    }
    if (event.target.type == 'password') {
      this.setState({
        password: event.target.value
      });
    }
  }

  render() {
    return (
    <div className="App">
      <h1>Is this working?</h1>
        <UserInput
        changeInput={this.inputChangHandler}
        username={this.state.userName}
        password={this.state.password} />
        <UserOutput.output1 username={this.state.userName} />
        <UserOutput.output2 password={this.state.password} />
    </div>
  );
  }
}

export default App;