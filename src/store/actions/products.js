export const TOOGLE_FAVORITE = 'TOOGLE_FAVORITE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const toggleFavorite = id => {
  return {type: TOOGLE_FAVORITE, prodId: id};
};

export const addToCart = id => {
  return {type: ADD_TO_CART, prodId: id};
};
