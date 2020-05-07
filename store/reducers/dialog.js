import {SET_DIALOG_VISIBILITY} from '../actions/dialog';

const initialState = {
  isVisible: false,
  message: '',
  icon: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOG_VISIBILITY:
      return {
        isVisible: action.payload.isVisible,
        message: action.payload.message,
        icon: action.payload.icon,
      };
    default:
      return state;
  }
};
