import React, { FC } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styles from './App.css';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import About from './static-pages/About/About';
import Data from './static-pages/Data/Data';
import Roadmap from './static-pages/Roadmap/Roadmap';
import Cookies from './static-pages/Cookies/Cookies';

const App: FC = () => {
  return (
    <Router>
      <div className={styles.global__wrapper}>
        <div className={styles.grid__sidebar}>
          <Header />
        </div>
        <div className={styles.grid__container}>
          <Switch>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/data'>
              <Data />
            </Route>
            <Route path='/roadmap'>
              <Roadmap />
            </Route>
            <Route path='/cookies'>
              <Cookies />
            </Route>
          </Switch>
        </div>
      </div>
      <Redirect exact from='/' to='dashboard' />
    </Router>
  );
};

export default App;
