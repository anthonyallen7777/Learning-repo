import React, { Component } from 'react';
import classes from './App.module.css';

import { Routes, Route } from 'react-router';

import withRouter from './hoc/withRouter';

import { Navigate } from 'react-router';

//redux
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/index';


import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

//Auth
import Auth from './containers/Auth/Auth';

import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  // state = {
  //   show: true
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  
  render() {
    let routes = (
      <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" exact element={<BurgerBuilder />}/>
            <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
            <Route path="/checkout/*" element={<Checkout />}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" exact element={<BurgerBuilder />}/>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      );
    }

    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actionCreators.authCheckState()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));