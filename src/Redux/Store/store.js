import {  applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import authReducer from './../Reducer/authReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import registerReducer from '../Reducer/registerReducer';
import fetchReducer from '../Reducer/fetchReducer';
import orderReducer from '../Reducer/ordersReducer';
import accountReducer from '../Reducer/accountsReducer';
import { paginationReducer } from '../Reducer/paginationReducer';
import { checkboxReducer } from '../Reducer/checkboxReducer';
import productsReducer from '../Reducer/ProductsReducer';
import { SelectDropdownreducer } from '../Reducer/selectDropdownReducer';
import categoryReducer from '../Reducer/categoryreducer';
import breadcrumbReducer from '../Reducer/breadCrumbReducer';
import cartReducer from '../Reducer/cartReducer';

const rootReducer = combineReducers({
  user: authReducer,
  register: registerReducer,
  fetch: fetchReducer,
  order: orderReducer,
  account:accountReducer,
  pagination: paginationReducer,
  checkbox: checkboxReducer,
  product: productsReducer,
  select: SelectDropdownreducer,
  category: categoryReducer,
  bCrumb: breadcrumbReducer,
  cart: cartReducer,

});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
  