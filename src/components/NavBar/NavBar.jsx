import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className={styles.navWrapper} >
      <div>
        <Link to='/' className={styles.nav}>Home</Link> 
      </div>
      <div>
        <Link to='/goals/create' className={styles.nav}>Add Goal</Link>
        <Link to='/goals' className={styles.nav}>My Goals</Link>
        <Link to='' className={styles.nav} onClick={props.handleLogout}>Log Out</Link>
      </div>
    </div>
    :
    <div className={styles.navWrapper}>
      <div>
        <Link to='/about' className={styles.nav}>About</Link>
        <Link to='/' className={styles.nav}>Home</Link>
      </div>
      <div>
        <Link to='/login' className={styles.nav} >Log In</Link>
        <Link to='/signup' className={styles.nav}>Sign Up</Link>
      </div>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};



export default NavBar;