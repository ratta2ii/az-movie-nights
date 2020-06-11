import React from 'react';
import styles from './Footer.css';
import facebookIcon from './../../assets/images/facebook-icon.png';
import twitterIcon from './../../assets/images/twitter-icon.png';
import instaIcon from './../../assets/images/instagram-icon.png';



export default function Footer() {

  return (
    <div className={styles.footerComponent}>
      
      <h1 className={styles.footerEmail}>example@example.com</h1>
      <h1 className={styles.footerPhone}>(555)-555-5555</h1>

      <div className={styles.iconContainer}>
        <img src={facebookIcon} id={styles.facebookIcon} />
        <img src={twitterIcon} id={styles.twitterIcon} />
        <img src={instaIcon} id={styles.instaIcon} />
      </div> 

    </div>
  );
}
