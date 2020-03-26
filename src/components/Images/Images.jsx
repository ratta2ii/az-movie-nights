import React from 'react';
import styles from './Images.css';
import image1 from './../../assets/images/images1.jpg';
import image2 from './../../assets/images/images2.jpg';
import image3 from './../../assets/images/images3.jpg';
import cool from './../../assets/images/cool.jpeg';
import giantScreen from './../../assets/images/giant-screen.jpg';



function Images() {



  return (
    <div id={styles.imageComponent}>

      <div className={styles.row} >

        <div className={styles.column}>
          <img src={cool} className={styles.imageStyling} />
          <img src={image2} className={styles.imageStyling} />
          <img src={image3} className={styles.imageStyling} />
          <img src={cool} className={styles.imageStyling} />
          <img src={giantScreen} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
        </div>

        <div className={styles.column}>
          <img src={giantScreen} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={image2} className={styles.imageStyling} />
          <img src={giantScreen} className={styles.imageStyling} />
          <img src={image3} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={image2} className={styles.imageStyling} />
        </div>

        <div className={styles.column}>
          <img src={image3} className={styles.imageStyling} />
          <img src={cool} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={giantScreen} className={styles.imageStyling} />
          <img src={image1} className={styles.imageStyling} />
          <img src={image3} className={styles.imageStyling} />
        </div> 

      </div>
    </div>
  );
}

export default Images;