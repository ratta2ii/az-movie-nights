import React from 'react';
import styles from './Navbar.css';
import hamburger from '../assets/images/hamburger-edit.png';


function Navbar() {

  console.log("I am hamburger" + hamburger);

  let hamburgerDiv = {
    background: `url(${hamburger}) no-repeat`
    // width: '50px',
    // height: '50px',
    // float: 'right',
    // margin: '25px 105px 0 0'
  };


  return (
    <div>
      <div style={hamburgerDiv}>
      </div>
      <div className={styles.navBody}>
        <h1>I am the Navbar!</h1>
        <h2 className={styles.tester}>I am tester class</h2>
      </div>
    </div>
  );
}

export default Navbar;




