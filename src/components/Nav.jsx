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
    <div className={styles.navComponent}>

      <img id={styles.hamburgerIcon} src={hamburger} onClick={handleDisplaySideNavBar} />

      <nav className={styles.sidebarContainer} >
        <ul className={styles.ulTag}>
          <li><a className={styles.anchorTag} href="#">HOME</a></li>
          <li><a className={styles.anchorTag} href="#">PRODUCTS</a></li>
          <li><a className={styles.anchorTag} href="#">IMAGES</a></li>
          <li><a className={styles.anchorTag} href="#">FAQ</a></li>
          <li><a className={styles.anchorTag} href="#">CONTACT</a></li>
        </ul>
      </nav>


      <nav className={styles.navbarContainer}>
        <ul className={styles.ulTag2} >
          <Link to="/"><li className={styles.homeLink} >HOME</li></Link>
          <Link to="/"><li className={styles.listElements} >PRODUCTS</li></Link>
          <Link to="/"><li className={styles.listElements} >IMAGES</li></Link>
          <Link to="/"><li className={styles.listElements} >FAQ</li></Link>
          <Link to="/"><li className={styles.listElements} >CONTACT</li></Link>
        </ul>
      </nav>
      <div className={styles.contactContainer}>
        <Link to="/images">
          <h5 className={styles.contactInfo}>Email: example@example.com</h5>
        </Link> 
        <h5 className={styles.contactInfo}>Phone: (555) 555-5555</h5>
      </div>
      <style jsx>{`
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
