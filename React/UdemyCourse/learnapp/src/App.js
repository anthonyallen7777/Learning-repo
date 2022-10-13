import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
import BurderBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurderBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;