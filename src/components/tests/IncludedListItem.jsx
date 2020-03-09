// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';



// function IncludedListItem(props) {

//   console.log("Props below ------------");
//   console.log(props);

//   const includedContent =
//     <div>{props}</div>;




//   let background = {
//     backgroundColor: 'green',
//     height: '500px'
//   };

//   return (
//     <div style={background}>
//       {includedContent}
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