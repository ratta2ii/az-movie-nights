import React from 'react';
import styles from './Header.css';


export default function Header() {

  return (
    <div className={styles.headerComponent}>
      <div className={styles.titleArea}>
        <h1 className={styles.mainTitle}><span className={styles.azTitle}>AZ</span> MOVIE NIGHTS</h1>
        <p className={styles.commentMain}>"AZ Event Team has provided an awesome experience. The movie was the hit of the hit of the party. I Will defintley book again."</p>
        <p className={styles.commentSignature}>- Satisfied Customer</p>
      </div>
    </div>
  );
}
