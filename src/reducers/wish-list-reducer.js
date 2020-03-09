export default (state = {} , action) => {
  let newState;
  switch (action.type) {
  case 'ADD_PRODUCT':
    let currentState = state;
    newState = Object.assign({}, currentState, action.product);
    console.log('I am the new state');
    console.log(newState);
    return newState;
  default:
    return state;
  }
};


// console.log('I am the state');
// console.log(state[0]);
// console.log('I am the action');
// console.log(action.product);