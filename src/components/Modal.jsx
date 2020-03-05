import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Reminder that masterProductList will be static(?), so this can be removed as a 
// state slice, and imported in as a constant (import c from './../constants';)



function Modal(props) {

  let optionalContent = null;

  let background = {
    backgroundColor: '#ffafaf'
  };

  let currentProductId = props.selectedProduct.productId;
  let productList = props.masterProductList;

  productList.forEach(ele => {
    if (ele.productId == currentProductId) {
      optionalContent =
        <div style={background}>
          <h1>I am the Header Component!</h1>
          <h1>I am the product Title: {ele.title}</h1>
          <h1>I am the product Id: {ele.productId}</h1>
        </div>;
    }
  });

  if (productList.length > 1) {
    return (
      <div>
        {optionalContent}
      </div>
    );
  } else {
    return (
      <div style={background}>
        <h1>I am the Header Component!</h1>
        <h1>I am the wrong one!</h1>
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















