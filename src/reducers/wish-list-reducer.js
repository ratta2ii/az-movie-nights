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



