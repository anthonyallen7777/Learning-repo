import React, { Component } from 'react';
import classes from './App.module.css';

import { Routes, Route } from 'react-router';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

//Auth
import Auth from './containers/Auth/Auth';

class App extends Component {
  // state = {
  //   show: true
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }
  
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Routes>
            <Route path="/checkout/*" element={<Checkout />}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" exact element={<BurgerBuilder />}/>
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;