import { combineReducers } from 'redux';
import { productReducer } from './Products/prodcutReducer';
import { accountReducer } from './Accounts/accountReducer';
import { loginReducer } from './Login/loginReducer';
import { registerReducer } from './Register/registerReducer';
import { orderReducer } from './Orders/orderReducer';


const rootReducer = combineReducers({
  productReducer: productReducer,
  accountReducer: accountReducer,
  orderReducer: orderReducer,
  loginReducer: loginReducer,
  registerReducer: registerReducer,

});

export default rootReducer;