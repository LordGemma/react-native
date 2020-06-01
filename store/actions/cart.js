import {baseUrl} from '../constants';
import ErrorHandler from '../../utils/errorHandler';
import CartItem from '../../models/cartItem';

export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

export const fetchCart = () => {
  return async (dispatch, getState) => {
    let products = [];
    let total;
    const token = getState().auth.token;

    try {
      const formData = new FormData();
      formData.append('token', token);

      const response = await fetch(`${baseUrl}checkout/cart`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        ErrorHandler('Something went wrong!', dispatch);
      }

      const resData = await response.json();
      for (const item of resData.products) {
        products.push(
          new CartItem(
            item.name,
            item.price,
            `http:${item.thumb}`,
            item.quantity,
          ),
        );
      }
      total = resData.totals;
    } catch (err) {
      ErrorHandler(err, dispatch);
    }

    dispatch({
      type: SET_CART_PRODUCTS,
      payload: {
        products,
        total,
      },
    });
  };
};

export const addToCart = productId => {
  return async (dispatch, getState) => {
    let products = [];
    let total;
    const token = getState().auth.token;

    try {
      const formData = new FormData();
      formData.append('token', token);
      formData.append('product_id', productId);
      formData.append('quantity', 1);

      const response = await fetch(`${baseUrl}checkout/cart`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        ErrorHandler('Something went wrong!', dispatch);
      }

      const resData = await response.json();
      for (const item of resData.products) {
        products.push(
          new CartItem(
            item.name,
            item.total,
            `http:${item.thumb}`,
            item.quantity,
          ),
        );
      }
      total = resData.totals;
    } catch (err) {
      ErrorHandler(err, dispatch);
    }

    dispatch({
      type: SET_CART_PRODUCTS,
      payload: {
        products,
        total,
      },
    });
  };
};
