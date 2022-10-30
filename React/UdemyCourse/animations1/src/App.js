import React, { Component } from "react";

import classes from './App.module.css';
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
    console.log("TESTING BUTTON PRESS");
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>React Animations</h1>
        <Modal closed={this.closeModal} show={this.state.modalIsOpen}/>
        <Backdrop show={this.state.modalIsOpen} />
        <button className={classes.Button} onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
