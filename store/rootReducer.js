import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import productsReducer from './reducers/products';
import categoriesReducer from './reducers/categories';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
});
