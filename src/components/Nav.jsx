import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';
import hamburger from '../assets/images/hamburger-edit.png';




export default function Nav() {

  function handleDisplaySideNavBar(e) {
    var menu = document.querySelector('ul');
    menu.classList.toggle('active');
    e.preventDefault();
  }

  return (
    <div>
      <img className={styles.hamburgerIcon} src={hamburger} onClick={handleDisplaySideNavBar}/>
      <nav className={styles.navContainer} >
        <ul className={styles.ulTag}>
          <li><a className={styles.anchorTag} href="#">Home</a></li>
          <li><a className={styles.anchorTag} href="#">About me</a></li>
          <li><a className={styles.anchorTag} href="#">Portfolio</a></li>
          <li><a className={styles.anchorTag} href="#">Contact</a></li>
        </ul>
      </nav>
      <style global jsx>{`
         .active {
          position: absolute;
          display: block;
          background: rgb(68, 100, 204);
          width: 40%;
          left: 0;
          top: 0;
          height: 100%;
        }
        `}</style>
    </div>

  );

}



// <div>
// <h1>I am the Nav!!!!</h1>
// <img className={styles.hamburgerIcon} src={hamburger} onClick={handleDisplaySideNavBar}/>
// <nav className={styles.navContainer} >
//   <ul className={styles.ulTag}>
//     <li><a className={styles.anchorTag} href="#">Home</a></li>
//     <li><a className={styles.anchorTag} href="#">About me</a></li>
//     <li><a className={styles.anchorTag} href="#">Portfolio</a></li>
//     <li><a className={styles.anchorTag} href="#">Contact</a></li>
//   </ul>
// </nav>
// <style global jsx>{`
//    .active {
//     position: absolute;
//     display: block;
//     background: rgb(68, 100, 204);
//     width: 40%;
//     left: 0;
//     top: 0;
//     height: 100%;
//   }
//   `}</style>
// </div>


