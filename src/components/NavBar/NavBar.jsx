import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className={styles.navWrapper} >
      <div>
        <NavLink to='/' className={styles.nav}>Home</NavLink> 
      </div>
      <div>
        <NavLink to='/goals' className={styles.nav}>My Goals</NavLink>
        <NavLink to='' className={styles.nav} onClick={props.handleLogout}>Log Out</NavLink>
      </div>
    </div>
    :
    <div className={styles.navWrapper}>
      <div>
        <NavLink to='/about' className={styles.nav}>About</NavLink>
        <NavLink to='/' className={styles.nav}>Home</NavLink>
      </div>
      <div>
        <NavLink to='/login' className={styles.nav} >Log In</NavLink>
        <NavLink to='/signup' className={styles.nav}>Sign Up</NavLink>
      </div>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};



export default NavBar;