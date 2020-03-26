import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Wish.css';


function Wish(props) {

  // console.log(props);

  function handleRemoveProductFromWishList(productProps) {

    console.log('remove this node');
    console.log(productProps);

    const { dispatch } = props;
    const action = {
      type: 'REMOVE_PRODUCT',
      product: productProps
    };
    dispatch(action);
  }

  let content =
    <div>
      <h1>{props.title} | ${props.price}</h1>
    </div>;


  return (
    <div id={styles.wishComponent}>
      <div onClick={() => {
        handleRemoveProductFromWishList(props);
      }}>
        <h3>X</h3>
      </div>
      {content}
    </div>
  );
}

Wish.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(Wish);