// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';



// function IncludedListItem(props) {

//   let includedContent = null;

//   let currentProductId = props.selectedProduct.productId;
//   let productList = props.masterProductList;

//   let exec = productList.forEach(ele => {
//     if (ele.productId == currentProductId) {
//       let items = ele.included;
  
//       console.log(items);
//       items.forEach(item => {
//         console.log(item);
//         let myElement = document.getElementsByTagName('ul');
//         console.log("------------" + myElement);
//         myElement.insertAdjacentHTML('beforeend','<b>Something</b>');
//       });
//     }
//   });

//   let background = {
//     backgroundColor: 'green',
//     height: '500px'
//   };

//   return (
//     <div style={background}>
//       <ul id={theList}>
//         {exec}
//       </ul>
//     </div>
//   );
// }


// IncludedListItem.propTypes = {
//   selectedProduct: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     masterProductList: state.masterProductList,
//     selectedProduct: state.selectedProduct
//   };
// };

// export default connect(mapStateToProps)(IncludedListItem);