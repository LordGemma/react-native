import {
  SET_PRODUCTS,
  SET_PRODUCT_DETAILS,
  SET_CATEGORY_PRODUCTS,
} from '../actions/products';

const initialState = {
  availableProducts: [],
  groupedProducts: [],
  productDetails: null,
  categoryProducts: [],
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
    case SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: action.payload,
      };
  }
  return state;
};
