import React from "react";
import classes from './App.module.css';
import testimage1 from './assets/testimage1.jpeg';

import { NavLink, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header className={classes.MainHeader}>
        <div>
          <a href="/" className={classes.MainHeader__Home}>Home</a>
        </div>
        <nav className={classes.MainNav}>
          <ul className={classes.MainNav__Items}>
            <li className={classes.MainNav__Item}>
              <a href="/packages">Packages</a>
            </li>
            <li className={classes.MainNav__Item}>
              <a href="/customers">Customers</a>
            </li>
            <li className={classes.MainNav__Item + ' ' + classes.MainNav__Item__cta}>
              <a href="/hosting">Start Hosting</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={classes.Container}>
          <div className={classes.Content1}>
            <h1>Get the freedom you deserve</h1>
          </div>
          <div className={classes.Content2}>
            <h1>Choose Your Plan</h1>
          </div>
          <div className={classes.Content3}>
            <h3>Make sure you got the most for your money!</h3>
          </div>
        </div>
      </main>

      {/* <Routes>
        <Route />
      </Routes> */}
    </React.Fragment>
  );
}

export default App;
