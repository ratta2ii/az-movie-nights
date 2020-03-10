/* eslint-disable indent */
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_PRODUCT':
      newState = Object.assign({}, state, {
        [action.product.productId]: {
          title: action.product.title,
          price: action.product.price
        }
      });
      return newState;
    default:
      return state;
  }
};



// export default (state = {}, action) => {

//   console.log('I am the action');
//   console.log(action.product);
//   let newState;
//   switch (action.type) {
//   case 'ADD_PRODUCT':
//     newState = Object.assign({}, state, action.product);
//     console.log('I am the new state');
//     console.log(newState);
//     return newState;
//  
//   }
// };




// export default (state = {}, action) => {
//   let newState;
//   const { productId, price, title } = action;

//   switch (action.type) {
//     case 'ADD_TICKET':
//       newState = Object.assign({}, state, {
//         [productId]: {
//           price: price,
//           title: title
//         }
//       });
//       console.log('I am the new state');
//       console.log(newState);
//       console.log('I am the action');
//       console.log(action);

//       return newState;
//     default:
//       return state;
//   }
// };


