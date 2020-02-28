import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';
import hamburger from '../assets/images/hamburger-edit.png';



export default function Navbar() {

  function handleDisplaySideNavBar() {
    let tester = document.getElementsByClassName('navBody');
    console.log('Click event works!' + tester);
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBody}>
        <ul>
          <Link to="/"><li className={styles.homeLink} >Home</li></Link>
          <Link to="/"><li className={styles.listElements} >Products</li></Link>
          <Link to="/"><li className={styles.listElements} >FAQ</li></Link>
          <Link to="/"><li className={styles.listElements} >Admin</li></Link>
        </ul>
      </div>
      <div className={styles.hamburgerDiv} onClick={handleDisplaySideNavBar}>
        <img src={hamburger} className={styles.hamburgerStyling} />
      </div>
    </div>
  );

}
