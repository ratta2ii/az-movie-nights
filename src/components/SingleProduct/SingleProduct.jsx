import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import soundImage from './../../assets/images/sound.jpg';
import styles from './SingleProduct.css';
// import c from './../../constants';



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
            <img className={styles.productBoxImage} src={soundImage} />
          </li>
        </div>
      </Link>
    </div>

  );
}


SingleProduct.propTypes = {
  productId: PropTypes.string,
  dispatch: PropTypes.func,
  title: PropTypes.string
};

export default connect()(SingleProduct);

