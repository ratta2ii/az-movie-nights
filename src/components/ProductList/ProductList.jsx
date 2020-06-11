/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.css';
import SingleProduct from './../SingleProduct/SingleProduct';



function ProductList(props) {

  if (props.currentRouterPath == '/productlist') {
    return (
      <div id="something" className={styles.altDivStyling} >

        <div className={styles.productHeaderContainer}>
          <h1 className={styles.productHeader}>PRODUCTS</h1>
        </div>

        <div className={styles.background}>
          <ul>
            {props.productList.map((product) =>
              <SingleProduct
                title={product.title}
                productId={product.productId}
                description={product.description}
                mainImage={product.mainImage}
                id={product.id}
                key={product.key} />
            )}
          </ul>
        </div>

      </div>
    );
    
  } else {
    return (
      <div id="something" className={styles.productListComponent} >

        <div className={styles.productHeaderContainer}>
          <h1 className={styles.productHeader}>PRODUCTS</h1>
        </div>

        <div className={styles.background}>
          <ul>
            {props.productList.map((product) =>
              <SingleProduct
                title={product.title}
                productId={product.productId}
                description={product.description}
                mainImage={product.mainImage}
                id={product.id}
                key={product.key} />
            )}
          </ul>
        </div>

      </div>
    );
  }
}

ProductList.proptypes = {
  productList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default ProductList;













