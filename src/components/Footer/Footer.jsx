import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';
import facebookIcon from './../../assets/images/facebook-icon.png';
import twitterIcon from './../../assets/images/twitter-icon.png';
import instaIcon from './../../assets/images/instagram-icon.png';
import bookNow from './../../assets/images/book-online-button.png';
import logo from './../../assets/images/logo.png';



export default function Footer() {


  return (
    <div className={styles.footerComponent}>
      <h1 className={styles.footerEmail}>example@example.com</h1>
      <h1 className={styles.footerPhone}>(555)-555-5555</h1>
      {/* <img src={logo} className={styles.companyLogo} />
      <Link to="/reserveform"><img src={bookNow} className={styles.bookNowButton} /></Link> */}
      <div className={styles.iconContainer}>
        <img src={facebookIcon} id={styles.facebookIcon} />
        <img src={twitterIcon} id={styles.twitterIcon} />
        <img src={instaIcon} id={styles.instaIcon} />
      </div>
      
    </div>
  );
}
