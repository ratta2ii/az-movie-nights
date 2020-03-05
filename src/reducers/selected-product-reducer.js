// import types from './../constants';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'SELECT_PRODUCT':
    newState = Object.assign({}, state, action);
    return newState;
  default:
    return state;
  }
};