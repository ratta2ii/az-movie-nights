import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Modal.css';
// import IncludedListItem from './IncludedListItem';
// Reminder that masterProductList will be static(?), so this can be removed as a 
// state slice, and imported in as a constant (import c from './../constants';)



function Modal(props) {

  let productContent = null;

  let currentProductId = props.selectedProduct.productId;
  let productList = props.masterProductList;

  productList.forEach(ele => {
    if (ele.productId == currentProductId) {
      productContent =
        <div>
          <div className={styles.modalImageDiv}>
            <img className={styles.modalImage} src={ele.mainImage} />
          </div>

          <h1 className={styles.productTitle}>{ele.title}</h1>
          <p className={styles.productDescription}>{ele.description}</p>
          <h1 className={styles.productId}>Product Id: {ele.productId}</h1>
          <h5 className={styles.productPrice}>{ele.price}</h5>
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
          <h1>I am the Header Component!</h1>
          <h1>I am the wrong one!</h1>
        </div>
      </div>
    );
  }

}

Modal.propTypes = {
  selectedProduct: PropTypes.resetWarningCache
};

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    selectedProduct: state.selectedProduct
  };
};

export default connect(mapStateToProps)(Modal);


















