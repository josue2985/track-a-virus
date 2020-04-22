import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo';
import styles from './Header.css';

const Header: FC = () => {
  // const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className={styles.stack__mobile}>
      <div className={styles.stack__logo}>
        <Logo width={'70%'} />
      </div>
      <nav className={styles.nav__container}>
        <NavLink
          to='/dashboard'
          activeClassName={styles.active}
          className={styles.menu}
          id='dashboard'
        >
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='31.876'
              height='28.903'
              viewBox='0 0 31.876 28.903'
              className={styles.icon}
            >
              <path d='M15.938.5A15.37 15.37 0 005.022 5.03a15.541 15.541 0 000 21.919 15.184 15.184 0 001.41 1.246 1.06 1.06 0 001.458-.2 9.96 9.96 0 0116.1 0 1.062 1.062 0 001.458.2 14.964 14.964 0 001.41-1.246A15.486 15.486 0 0015.938.5zm0 2.062a13.286 13.286 0 019.457 3.932 13.433 13.433 0 010 18.987c-.17.17-.352.305-.523.464a11.782 11.782 0 00-17.869 0c-.17-.158-.352-.293-.523-.464a13.433 13.433 0 010-18.987 13.281 13.281 0 019.457-3.934zm7.257 5.092a1.029 1.029 0 00-.7.305l-4.487 4.5a4.1 4.1 0 00-2.065-.573 4.148 4.148 0 103.537 2.027l4.473-4.482a1.032 1.032 0 00.231-1.148 1.058 1.058 0 00-.985-.624zm-7.257 6.289a2.07 2.07 0 11-2.054 2.064 2.04 2.04 0 012.054-2.064z'></path>
            </svg>
          </i>
          <span className={styles.nav__text}>Dashboard</span>
        </NavLink>
        <NavLink
          to='/about'
          className={styles.menu}
          activeClassName={styles.active}
        >
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='31.125'
              height='31.125'
              viewBox='0 0 31.125 31.125'
              className={styles.icon}
            >
              <path d='M17.724 9.234a2.162 2.162 0 11-2.162-2.162 2.161 2.161 0 012.162 2.162M17.361 15.155v7.125a1.8 1.8 0 01-3.6 0v-7.125a1.8 1.8 0 113.6 0z'></path>
              <path d='M15.563 0a15.563 15.563 0 1015.562 15.563A15.563 15.563 0 0015.563 0zm9.048 24.611a12.8 12.8 0 11-18.1-18.1 12.8 12.8 0 1118.1 18.1z'></path>
              <path d='M15.563 0a15.563 15.563 0 1015.562 15.563A15.563 15.563 0 0015.563 0zm9.048 24.611a12.8 12.8 0 11-18.1-18.1 12.8 12.8 0 1118.1 18.1z'></path>
            </svg>
          </i>
          <span className={styles.nav__text}>Creditos</span>
        </NavLink>
      </nav>
      {/* <div className={styles.banner}>
        <div className={styles.logo}>
          <a href='/'>
            <img src={icon} />
            Track a Virus
          </a>
        </div>
        <div>
          <a href='/'>COVID-19 Dashboard</a>
        </div>
      </div> */}

      {/* <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className={styles['menu-toggle']}
      >
        &#9776;
      </div> */}

      {/* <ul className={`${styles.menu} ${!toggleMenu ? styles.hidden : ''}`}>
        <li>
          <NavLink id='home' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/roadmap' activeClassName='active' onClick={() => setToggleMenu(!toggleMenu)}>
            Feature roadmap
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
