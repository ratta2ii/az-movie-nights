import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './SingleProduct.css';



function SingleProduct(props) {

  function handleSavingSelectedProduct(productId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_PRODUCT',
      productId: productId
    };
    dispatch(action);
  }

  return (
    <div>
      <Link to='/productdetails'>
        <div onClick={() => {
          handleSavingSelectedProduct(props.productId);
        }}>
          <li className={styles.productListElems}>
            <div className={styles.titleStyling}>{props.title}</div>
            <img className={styles.productBoxImage} src={props.mainImage} />
          </li>
        </div>
      </Link>
    </div>

  );
}

SingleProduct.propTypes = {
  title: PropTypes.string,
  productId: PropTypes.string,
  mainImage: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect()(SingleProduct);

