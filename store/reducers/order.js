import {SET_ORDERS} from '../actions/order';

const initialState = {
  ordersList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        ordersList: action.payload,
      };
  }

  return state;
};
