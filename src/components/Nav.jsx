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

  let navCom = {
    backgroundColor: 'black',
    height: '100px'
  };


  return (
    <div style={navCom}>

      <img className={styles.hamburgerIcon} src={hamburger} onClick={handleDisplaySideNavBar} />

      <nav className={styles.sidebarContainer} >
        <ul className={styles.ulTag}>
          <li><a className={styles.anchorTag} href="#">Home</a></li>
          <li><a className={styles.anchorTag} href="#">About me</a></li>
          <li><a className={styles.anchorTag} href="#">Portfolio</a></li>
          <li><a className={styles.anchorTag} href="#">Contact</a></li>
        </ul>
      </nav>


      <nav className={styles.navbarContainer}>
        <ul className={styles.ulTag2} >
          <Link to="/"><li className={styles.homeLink} >Home</li></Link>
          <Link to="/"><li className={styles.listElements} >Products</li></Link>
          <Link to="/"><li className={styles.listElements} >FAQ</li></Link>
          <Link to="/"><li className={styles.listElements} >Admin</li></Link>
        </ul>
      </nav>
      <style global jsx>{`
         .active {
          position: absolute;
          display: block;
          background: #fab759;
          width: 40%;
          left: 0;
          top: 0;
          height: 100%;
        }
        `}</style>
    </div>

  );
}
