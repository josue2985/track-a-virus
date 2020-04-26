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
import Logo from './Header/logo';

interface Props {
  data: boolean;
}

const App: FC = () => {
  function removeOpenGlobal() {
    const elemBtn = document.getElementById('globalWrapper');
    if (elemBtn.classList.contains('open')) {
      elemBtn.classList.remove('open');
    } else {
      elemBtn.classList.add('open');
    }
  }

  function removeStyleShow() {
    const elemBtn = document.getElementById('sidebarOpen');
    if (elemBtn.classList.contains('show')) {
      elemBtn.classList.remove('show');
    } else {
      elemBtn.classList.add('show');
    }
  }

  function hideSideBarOpen() {
    const sideBarOpen = document.getElementById('sidebarOpen');
    removeStyleShow();
    sideBarOpen.classList.toggle('hide');
  }

  function removeStyleHide() {
    const elemBtn = document.getElementById('sidebarClose');
    if (elemBtn.classList.contains('hide')) {
      elemBtn.classList.remove('hide');
    } else {
      elemBtn.classList.add('hide');
    }
  }

  function showSideBarClose() {
    const sideBarOpen = document.getElementById('sidebarClose');
    sideBarOpen.classList.toggle('show');
    removeStyleHide();
  }

  function closeSidebar() {
    const elemBtn = document.getElementById('globalWrapper');
    const elemBtnToogle = document.getElementById('toogleBtn');
    removeOpenGlobal();
    hideSideBarOpen();
    showSideBarClose();
    elemBtn.classList.toggle('closed');
    elemBtnToogle.classList.toggle('closed');
  }

  return (
    <Router>
      <div
        id='globalWrapper'
        className={`${styles['global__wrapper']} ${styles['open']}`}
      >
        <div className={styles.grid__sidebar}>
          <div className={styles.sidebar__desktop}>
            <div
              onClick={() => closeSidebar()}
              id='toogleBtn'
              className={styles.fullscreenbtn}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100pt'
                height='100pt'
                viewBox='0 0 100 100'
                className={styles.fullscreenIcon}
              >
                <path d='M68.699 2.5c2.602 0 5.102 1 7.102 2.898 3.898 3.899 3.898 10.301 0 14.2L45.5 49.998l30.398 30.398c3.898 3.899 3.898 10.301 0 14.2-3.899 3.898-10.301 3.898-14.2 0L24.199 57.1C22.3 55.202 21.3 52.702 21.3 50c0-2.7 1.102-5.2 2.899-7.102L61.6 5.397C63.6 3.5 66.198 2.5 68.698 2.5z'></path>
              </svg>
            </div>
            <div className={styles.show} id='sidebarOpen'>
              <Header />
            </div>
            <div className={styles.hide} id='sidebarClose'>
              <Logo width={'90%'} />
            </div>
          </div>
          <div className={styles.sidebar__mobile}>
            <Header />
          </div>
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
