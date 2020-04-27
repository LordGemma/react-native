import {SET_PRODUCTS, SET_PRODUCT_DETAILS} from '../actions/products';

const initialState = {
  availableProducts: [],
  groupedProducts: [],
  productDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products,
        groupedProducts: action.groupedProducts,
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.productDetails,
      };
  }
  return state;
};
