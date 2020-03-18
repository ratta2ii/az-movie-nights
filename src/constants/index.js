import * as types from './ActionTypes';
import { masterProductList } from './MasterProductList';
import { Email } from './smtp';


export default {
  masterProductList: masterProductList,
  types: types,
  Email: Email
};
