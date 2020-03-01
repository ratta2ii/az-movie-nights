import React from 'react';
import soundImage from '../assets/images/sound.jpg';
import packageImage from '../assets/images/package.png';
import { Link } from 'react-router-dom';
import styles from './Products.css';


function Header() {

  return (
    <div>
      <div className={styles.background} >
        <ul>
          <li className={styles.productListElems}>
            <div className={styles.title}>Package Deals</div>
            <img src={packageImage} />
          </li>
          <li className={styles.productListElems}>
            <div className={styles.title} >Sound Equpiment</div>
            <img src={soundImage} />
          </li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
          <li className={styles.productListElems}> <div className={styles.title}>Header</div></li>
        </ul>
      </div>

      <style jsx>{`


       `}</style>
    </div>
  );
}

export default Header;
