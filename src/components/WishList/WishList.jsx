import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './WishList.css';
import Wish from './../Wish/Wish';

function WishList(props) {

  return (

    <div id={styles.wishListComponent}>
      {Object.keys(props.wishList).map(function (productId) {
        var product = props.wishList[productId];
        return <Wish
          title={product.title}
          price={product.price}
          key={productId}
        />;
      })}
    </div>
  );
}


WishList.propTypes = {
  wishList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  dispatch: PropTypes.function
};

const mapStateToProps = state => {
  return {
    wishList: state.wishList
  };
};

export default connect(mapStateToProps)(WishList);

