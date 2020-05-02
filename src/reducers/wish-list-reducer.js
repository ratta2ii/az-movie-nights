/* eslint-disable no-console */

export default (state = {}, action) => {
  console.log('I am the ADD_PRODUCT state before');
  console.log(state);
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
  case 'REMOVE_PRODUCT':
    var indx = parseInt(action.product.id);
    newState = Object.assign({}, state);
    delete newState[indx];
    console.log('I am the REMOVE_PRODUCT newState after');
    console.log(newState);
    return newState;
  default:
    return state;
  }
};



