import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';
import hamburger from '../assets/images/hamburger-edit.png';




export default function Navbar() {

  // function handleDisplaySideNavBar() {
  //   let tester = document.getElementsByClassName('navBody');
  //   console.log('Click event works!' + tester.children);
  // }

  return (
    <div>
      <h1>I am the Nav!!!!</h1>
      <img className={styles.hamburgerIcon} src={hamburger} />
      <nav className={styles.navContainer} >
        <ul className={styles.ulTag}>
          <li><a className={styles.anchorTag} href="#">Home</a></li>
          <li><a className={styles.anchorTag} href="#">About me</a></li>
          <li><a className={styles.anchorTag} href="#">Portfolio</a></li>
          <li><a className={styles.anchorTag} href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

  );

}
