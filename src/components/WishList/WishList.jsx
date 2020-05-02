import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './WishList.css';
import Wish from './../Wish/Wish';
import { render } from 'react-dom';

function WishList(props) {

  function handleRemoveProductFromWishList(productProps) {
    const { dispatch } = props;
    const action = {
      type: 'REMOVE_PRODUCT',
      product: productProps
    };
    dispatch(action);
  }

  return (

    <div id={styles.wishListComponent}>
      <div className={styles.wishListContainer}>
        <h1 className={styles.wishListHeader}>UNDER CONSTRUCTION, but here is the data.</h1>

        {Object.keys(props.wishList).map(function (productId) {
          var product = props.wishList[productId];
          return <Wish
            onRemoveProductFromWishList={handleRemoveProductFromWishList}
            title={product.title}
            price={product.price}
            id={productId}
            key={productId}
          />;
        })}
      </div>
    </div>
  );
}

WishList.propTypes = {
  wishList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    wishList: state.wishList
  };
};

export default connect(mapStateToProps)(WishList);





