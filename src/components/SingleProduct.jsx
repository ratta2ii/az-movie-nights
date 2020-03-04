import React from 'react';
import PropTypes from 'prop-types';
import soundImage from '../assets/images/sound.jpg';
import styles from './SingleProduct.css';


function SingleProduct(props) {

  function handleSavingSelectedProduct(product) {
    console.log("Below is the SingleProduct.jsx (handleSavingSelectedProduct)");
    console.log(product);
   
  }

  return (
    <div onClick={() => {
      handleSavingSelectedProduct({
        title: props.title,
        productId: props.productId,
        key: props.key,
        id: props
      });
    }}>
      <li className={styles.productListElems}>
        <div className={styles.titleStyling}>{props.title}</div>
        <img className={styles.productBoxImage} src={soundImage} />
      </li>
    </div>
  );
}


SingleProduct.propTypes = {
  title: PropTypes.string,
  productId: PropTypes.string
  // location: PropTypes.string.isRequired,
  // currentRouterPath: PropTypes.string,
};

export default SingleProduct;




// bring in image through propery (Currently hard coded)

// return (
//   <div onClick={() => { handleSavingSelectedProduct(props.productId); }}>
//     <li className={styles.productListElems}>
//       <div className={styles.title}>{props.title}</div>
//       <img src={soundImage} />
//     </li>
//   </div>
// );