import {baseUrl} from '../constants';
import Category from '../../models/category';
import ErrorHandler from '../../utils/errorHandler';

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}product/category&category_id=0`, {
        method: 'GET',
      });

      if (!response.ok) {
        ErrorHandler('Something went wrong!', dispatch);
      }

      const resData = await response.json();
      const loadedCategory = [];

      for (let category of resData.subcategories) {
        const {category_id, name, thumb} = category;

        loadedCategory.push(new Category(category_id, name, `http:${thumb}`));
      }

      dispatch({
        type: SET_CATEGORIES,
        categories: loadedCategory,
      });
    } catch (err) {
      ErrorHandler(err, dispatch);
    }
  };
};
