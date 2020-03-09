export default (state = [], action) => {
  let newState;
  switch (action.type) {
  case 'ADD_PRODUCT':
    newState = state.push(action);
    return newState;
  default:
    return state;
  }
};