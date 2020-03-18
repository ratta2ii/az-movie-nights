import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ProductDetails.css';


// Reminder that masterProductList will be static(?), so this can be removed as a 
// state slice, and imported in as a constant (import c from './../../constants';)


function ProductDetails(props) {


  function handleAddToWishList(props) {
    let arrPosition = props.selectedProduct.productId;
    let parsed = parseInt(arrPosition);
    let product = props.productList[parsed];
    const { dispatch } = props;
    const action = {
      type: 'ADD_PRODUCT',
      product
    };
    dispatch(action);
  }

  let productContent = null;

  let currentProductId = props.selectedProduct.productId;
  let productList = props.masterProductList;

  productList.forEach(ele => {
    if (ele.productId == currentProductId) {
      productContent =
        <div>
          <h1 className={styles.construction}>This page still needs styling!</h1>
          <h1 className={styles.construction}>More data coming as well.</h1>
            {/* <h1 className={styles.productId}>Product Id: {ele.productId}</h1> */}
          <div className={styles.modalImageDiv}>
            <img className={styles.modalImage} src={ele.mainImage} />
          </div>
          <div>
            <h1 className={styles.productTitle}>{ele.title}</h1>
            <p className={styles.productDescription}>{ele.description}</p>
          
           
            <div className={styles.addWishButton} onClick={() => { handleAddToWishList(props); }}>
              ADD TO WISHLIST
            </div>
            <div className={styles.reserveButton} onClick={() => { handleAddToWishList(props); }}>
              RESERVE NOW
            </div>
            <h5 className={styles.productPrice}>$ {ele.price}</h5>
          </div>
        </div>;
    }
  });

  if (productList.length > 1) {
    return (
      <div className={styles.modalComponent}>
        <div className={styles.modalContainer}>
          {productContent}

        </div>
      </div>

    );
  } else {
    return (
      <div>
        <div>
          <h1>There is no information on this product.</h1>
          <h1>I am the else statement in the ProductDetails</h1>
        </div>
      </div>
    );
  }

}

ProductDetails.propTypes = {
  selectedProduct: PropTypes.string,
  productList: PropTypes.array
};

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    selectedProduct: state.selectedProduct,
    wishList: state.wishList
  };
};

export default connect(mapStateToProps)(ProductDetails);









