import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.css';
import SingleProduct from './../SingleProduct/SingleProduct';
// import c from './../../constants';


function ProductList(props) {

  return (
    <div id={styles.productListComponent}>
      <div className={styles.background}>
        <ul>
          {props.productList.map((product) =>
            <SingleProduct
              SingleProduct
              title={product.title}
              productId={product.productId}
              id={product.id}
              key={product.key} />
          )}
        </ul>
      </div>

    </div>

  );
}

ProductList.proptypes = {
  productList: PropTypes.array
};

export default ProductList;



// SingleProduct
// title={product.title}
// productId={product.productId}
// id={product.id}
// key={product.id}













// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './ProductList.css';
// import SingleProduct from './../SingleProduct/SingleProduct';
// import c from './../../constants';


// function ProductList() {

//   return (
//     <div id={styles.productListComponent}>
//       <div className={styles.background}>
//         <ul>
//           {c.masterProductList.map((product) =>
//             <SingleProduct
//               title={product.title}
//               productId={product.productId}
//               id={product.id}
//               key={product.id} />
//           )}
//         </ul>
//       </div>

//     </div>

//   );
// }

// export default ProductList;