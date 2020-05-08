import _ from 'lodash';
import Product from '../../models/product';
import {baseUrl} from '../constants';
import ErrorHandler from '../../utils/errorHandler';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';
export const SET_CATEGORY_PRODUCTS = 'SET_CATEGORY_PRODUCTS';

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const categories = getState().categories.availableCategories;
      const loadedProducts = [];
      const groupedProducts = [];

      for (let category of categories) {
        const response = await fetch(
          `${baseUrl}product/filter&category_id=${category.id}`,
          {
            method: 'GET',
          },
        );

        if (!response.ok) {
          ErrorHandler('Something went wrong!', dispatch);
        }

        const resData = await response.json();
        const products = [];

        for (let row of resData.rows) {
          const {
            id,
            cell: {name, thumb, description, price},
          } = row;

          products.push(
            new Product(
              id,
              name,
              category.id,
              category.title,
              `http:${thumb}`,
              description,
              price,
            ),
          );

          loadedProducts.push(
            new Product(
              id,
              name,
              category.id,
              category.title,
              `http:${thumb}`,
              description,
              price,
            ),
          );
        }

        groupedProducts.push({
          categoryId: category.id,
          categoryName: category.title,
          data: products,
        });
      }

      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
        groupedProducts,
      });
    } catch (err) {
      ErrorHandler(err, dispatch);
    }
  };
};

export const fetchProductDetails = id => {
  return async dispatch => {
    const response = await fetch(`${baseUrl}product/product&product_id=${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      ErrorHandler('Something went wrong!', dispatch);
    }

    const resData = await response.json();

    dispatch({
      type: SET_PRODUCT_DETAILS,
      productDetails: resData,
    });
  };
};

export const fetchProductsWithPagination = (categoryId, page) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${baseUrl}product/filter&category_id=${categoryId}&page=${page}&rows=4`,
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        ErrorHandler('Something went wrong!', dispatch);
      }

      const resData = await response.json();

      const products = resData.rows.map(item => {
        const {
          id,
          cell: {description, name, price, thumb},
        } = item;
        return new Product(
          id,
          name,
          categoryId,
          '',
          `http:${thumb}`,
          description,
          price,
        );
      });

      dispatch({
        type: SET_CATEGORY_PRODUCTS,
        payload: _.concat(getState().products.categoryProducts, products),
      });
    } catch (error) {
      ErrorHandler('Something went wrong!', dispatch);
    }
  };
};
