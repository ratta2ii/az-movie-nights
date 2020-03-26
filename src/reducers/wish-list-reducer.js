/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
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
    case 'REMOVE_PRODUCT':
      console.log('I am the REMOVE_PRODUCT state before');
      console.log(state);
      console.log(action.product.id);
      const indx = parseInt(action.product.id);
      newState = state;
      delete newState[indx];
      console.log('I am the REMOVE_PRODUCT newState after');
      console.log(newState);
      return newState;
    default:
      return state;
  }
};



