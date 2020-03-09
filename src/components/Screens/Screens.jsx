import React from 'react';
import styles from './Screens.css';
import screensImage from './../../assets/images/screens.jpg';


function Screens() {

  return (
    <div className={styles.screensComponent}>
      <div className={styles.screensGridContainer}>

        <div className={styles.screensImageContainer}>
          <img className={styles.screensImageStyling} src={screensImage} />
        </div>

        <div className={styles.screensInfoContainer}>

          <h1 className={styles.screensHeader}>Pick The Perfect Screen</h1>
          <p className={styles.screenDescription}>Entertain guests at your next outdoor party with a movie, video games, or a presentation that will surely impress. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event! Choose your screen size and leave the rest to us.
          </p>
          <h3 className={styles.screenSizeTitle}>Smaller Screen:</h3>
          <ul className={styles.dimensionsList}>
            <li className={styles.dimensionsListElements}>Actual Dimensions: 12ft Width x 10ft Height
            </li>
            <li className={styles.dimensionsListElements}>Viewable Area: 9ft x 5ft (124" Television Screen)
            </li>
            <li className={styles.dimensionsListElements}> <a id="dimensions" href="#">Click for size scale</a>
            </li>
          </ul>
          <h3 className={styles.screenSizeTitle}>Larger Screen:</h3>
          <ul className={styles.dimensionsList}>
            <li className={styles.dimensionsListElements}>Actuals Dimensions: 20ft Width x 9.8ft Height
            </li>
            <li className={styles.dimensionsListElements}>Viewable Area: 16ft Width x 9ft Height
            </li>
            <li className={styles.dimensionsListElements}> <a id="dimensions" href="#">Click for size scale</a>
            </li>
          </ul>
        </div>
      </div>






    </div>
  );
}

export default Screens;