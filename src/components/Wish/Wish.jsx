import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wish';


function Wish(props) {

  let content =
    <div>
      <h1>{props.title} | {props.price}</h1>
    </div>;
    

  return (
    <div id={styles.wishComponent}>
      {content}
    </div>
  );
}

Wish.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string
};

export default Wish;