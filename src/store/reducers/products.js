import {PRODUCTS} from '../../data/dummy-data';
import {ADD_TO_CART, TOOGLE_FAVORITE} from '../actions/products';

const initialState = {
  products: PRODUCTS,
  favoriteProducts: [],
  cartProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE:
      const existingProdIndex = state.favoriteProducts.findIndex(
        prod => prod.id === action.prodId,
      );
      if (existingProdIndex >= 0) {
        const updatedFavProducts = [...state.favoriteProducts];
        updatedFavProducts.splice(existingProdIndex, 1);
        return {...state, favoriteProducts: updatedFavProducts};
      } else {
        const selectedProduct = state.products.find(
          prod => prod.id === action.prodId,
        );
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.concat(selectedProduct),
        };
      }
    case ADD_TO_CART:
      console.log(state.cartProducts);
      const existingIndex = state.cartProducts.findIndex(
        prod => prod.id === action.prodId,
      );
      if (existingIndex >= 0) {
        const updatedCartProducts = [...state.cartProducts];
        updatedCartProducts.splice(existingIndex, 1);
        console.log('deleted');
        return {...state, cartProducts: updatedCartProducts};
      } else {
        const selectedProduct = state.products.find(
          prod => prod.id === action.prodId,
        );
        console.log('added');
        return {
          ...state,
          cartProducts: state.cartProducts.concat(selectedProduct),
        };
      }
    default:
      return state;
  }
  return state;
};

export default productReducer;
