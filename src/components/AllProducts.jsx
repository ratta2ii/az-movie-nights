import React from 'react';
import { background } from './AllProducts.css';
import SingleProduct from './SingleProduct';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';


function AllProducts() {

  const productList = [{ title: 'Complete Package', id: v4(), productId: '1001' }, { title: 'Generators', id: v4(), productId: '1002' }, { title: 'Sound Equipment', id: v4(), productId: '1003' }, { title: 'Sound Equipment', id: v4(), productId: '1004' }, { title: 'Sound Equipment', id: v4(), productId: '1005' }, { title: 'Sound Equipment', id: v4(), productId: '1006' }, { title: 'Sound Equipment', id: v4(), productId: '1007' }, { title: 'Sound Equipment', id: v4(), productId: '1008' }, { title: 'Sound Equipment', id: v4(), productId: '1009' }];

  return (
    <div className={background}>
      <ul>
        {productList.map((product) =>
          <SingleProduct
            title={product.title}
            productId={product.productId}
            id={product.id}
            key={product.id} />
        )}
      </ul>
    </div>
  );
}

// Reminder: Pass in props as an argument and uncomment directive

// AllProducts.propTypes = {
//   ticketList: PropTypes.array,
//   currentRouterPath: PropTypes.string,
//   onTicketSelection: PropTypes.func
// };

export default AllProducts;