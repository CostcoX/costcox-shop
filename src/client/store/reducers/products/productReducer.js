import { GET_ALL_CATEGORIES_SUCCESS, GET_ALL_PRODUCTS } from "./productActions";
import { setStore } from "../helpers/storeUtils";

const initialState = {
  categories: [],
  productDetails: [],
  recommendedProducts: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return setStore(state, "productDetails", payload);
    case GET_ALL_CATEGORIES_SUCCESS:
      return setStore(state, "categories", payload);
    default:
      return state;
  }
};

export default productReducer;
