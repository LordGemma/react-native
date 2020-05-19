import {baseUrl} from '../constants';
import ErrorHandler from '../../utils/errorHandler';

export const SET_ORDERS = 'SET_ORDERS';

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    let orders;
    const token = getState().auth.token;

    try {
      const formData = new FormData();
      formData.append('token', token);

      const response = await fetch(`${baseUrl}account/history`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        ErrorHandler('Something went wrong!', dispatch);
      }

      const resData = await response.json();
      orders = resData.orders;
    } catch (err) {
      ErrorHandler(err, dispatch);
    }

    dispatch({
      type: SET_ORDERS,
      payload: orders,
    });
  };
};
