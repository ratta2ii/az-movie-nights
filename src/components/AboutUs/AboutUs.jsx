import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.css';
import giantScreen from './../../assets/images/movie-pic.jpg';
import bookNow from './../../assets/images/book-online-button.png';



function AboutUs() {


  return (
    <div className={styles.aboutComponent}>
      <div className={styles.row}>

        <div className={styles.leftColumn}>
          <img className={styles.imgStyling} src={giantScreen} />
        </div>

        <div className={styles.rightColumn}>
          <h1 className={styles.aboutUsHeader}>About Us</h1>
          <p className={styles.companyDescription}>AZ Event Team is a family-owned business that takes great   pride in making sure we deliver safe, high-quality rentals and event equipment.</p>
          <p className={styles.companyDescription}>We are here to help you plan your next event, whether that be a small backyard party,
            or a much larger city or corporate event. We are an upscale rental company offering
            exceptional service at an affordable price.</p>
          <p className={styles.companyDescription}>Please check out some photos <Link to="/images">HERE</Link> to see some of the different events that we have partnered with in the past.</p>
          <Link to="/reserveform"><img src={bookNow} className={styles.bookNowButton} /></Link>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;

