import React from 'react';
import styles from './ProductList.css';
import SingleProduct from './../SingleProduct/SingleProduct';
import c from './../../constants';


function ProductList() {

  return (
    <div id={styles.productListComponent}>
      <div className={styles.background}>
        <ul>
          {c.masterProductList.map((product) =>
            <SingleProduct
              title={product.title}
              productId={product.productId}
              id={product.id}
              key={product.id} />
          )}
        </ul>
      </div>

    </div>

  );
}

export default ProductList;