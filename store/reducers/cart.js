import {SET_CART_PRODUCTS} from '../actions/cart';

const initialState = {
  products: [],
  totalAmount: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        totalAmount: action.payload.total,
      };
  }

  return state;
};
