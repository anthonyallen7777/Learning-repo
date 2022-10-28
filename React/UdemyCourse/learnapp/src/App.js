import React, { Component, Suspense } from 'react';
import classes from './App.module.css';

import { Routes, Route } from 'react-router';


import { Navigate } from 'react-router';

//redux
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/index';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout  from './containers/Auth/Logout/Logout';
//lazy loading components
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));

//Auth
const Auth = React.lazy(() => import('./containers/Auth/Auth'));

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
            <Route path="/auth" element={<Suspense><Auth /></Suspense>} />
            <Route path="/" exact element={<BurgerBuilder />}/>
            <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
            <Route path="/checkout/*" element={<Suspense><Checkout /></Suspense>}/>
            <Route path="/orders" element={<Suspense><Orders /></Suspense>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/auth" element={<Suspense><Auth /></Suspense>} />
            <Route path="/" exact element={<BurgerBuilder />}/>
            <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      );
    }

    return (
      <div className={classes.App}>
        <h1>learn react</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);