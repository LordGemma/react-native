export const SET_DIALOG_VISIBILITY = 'SET_DIALOG_VISIBILITY';

export const connectionDialog = (isVisible, message = '', icon = null) => {
  return dispatch => {
    dispatch({
      type: SET_DIALOG_VISIBILITY,
      payload: {
        isVisible,
        message,
        icon,
      },
    });
  };
};
