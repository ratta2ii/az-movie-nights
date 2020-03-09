// ------------ You will put your combined reducers here --------------

import productListReducer from './product-list-reducer';
import selectedProductReducer from './selected-product-reducer';
import wishListReducer from './wish-list-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  masterProductList: productListReducer,
  selectedProduct: selectedProductReducer,
  wishList: wishListReducer
});

export default rootReducer;
