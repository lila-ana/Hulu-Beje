import { combineReducers } from 'redux';
import { productReducer } from './Products/prodcutReducer';
import { accountReducer } from './Accounts/accountReducer';
import { loginReducer } from './Login/loginReducer';
import { orderReducer } from './Orders/orderReducer';
import { registerReducer } from './Register/registerReducer';


const rootReducer = combineReducers({
  productReducer: productReducer,
  accountReducer: accountReducer,
  orderReducer: orderReducer,
  loginReducer: loginReducer,
  registerReducer: registerReducer,

});

export default rootReducer;