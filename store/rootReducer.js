import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import productsReducer from './reducers/products';
import categoriesReducer from './reducers/categories';
import dialogReducer from './reducers/dialog';
import ordersReducer from './reducers/order';
import cartReducer from './reducers/cart';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  dialog: dialogReducer,
  orders: ordersReducer,
  cart: cartReducer,
});
