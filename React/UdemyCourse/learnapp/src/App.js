import React, { Suspense, useEffect } from 'react';
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

const App = props => {
  const {onTryAutoSignup} = props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" exact element={<BurgerBuilder />}/>
          <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  );

  if (props.isAuthenticated) {
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
      <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        {routes}
      </Layout>
      </Suspense>
    </div>
  );
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