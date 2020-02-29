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

      <img id="hamburger" src="hamburger.png" />
      <nav className={navContainer} >
        <ul className={ulTag}>
          <li className={listElements}><a href="#">Home</a></li>
          <li className={listElements}><a href="#">About me</a></li>
          <li className={listElements}><a href="#">Portfolio</a></li>
          <li className={listElements}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

  );

}
