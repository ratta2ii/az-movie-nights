// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import IncludedListItem from './IncludedListItem';




// function IncludedList(props) {


//   let currentProductId = props.selectedProduct.productId;
//   let productList = props.masterProductList;
//   let items;

//   productList.forEach(ele => {
//     if (ele.productId == currentProductId) {
//       items = ele.included;

//     }
//   });

//   return (
//     <div style={background}>
//       {items.forEach(item => {
//         <IncludedListItem 
//           item={item} />;

//       })}
//     </div>
//   );
// }


// IncludedList.propTypes = {
//   selectedProduct: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     masterProductList: state.masterProductList,
//     selectedProduct: state.selectedProduct
//   };
// };

// export default connect(mapStateToProps)(IncludedList);


// let background = {
//   backgroundColor: 'green',
//   height: '500px'
// };