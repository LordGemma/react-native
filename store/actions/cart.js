import {baseUrl} from '../constants';
import ErrorHandler from '../../utils/errorHandler';
import CartItem from '../../models/cartItem';

export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

const getCart = async data => {
  let products = [];
  let total;

  try {
    const response = await fetch(`${baseUrl}checkout/cart`, {
      method: 'POST',
      body: data,
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

  return {
    products,
    total,
  };
};

export const fetchCart = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const formData = new FormData();

    formData.append('token', token);

    const {products, total} = await getCart(formData);

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
    const token = getState().auth.token;
    const formData = new FormData();

    formData.append('token', token);
    formData.append('product_id', productId);
    formData.append('quantity', 1);

    const {products, total} = await getCart(formData);

    dispatch({
      type: SET_CART_PRODUCTS,
      payload: {
        products,
        total,
      },
    });
  };
};
