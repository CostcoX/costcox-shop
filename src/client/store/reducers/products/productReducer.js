import { setProperty } from "dot-prop";
import { GET_ALL_PRODUCTS } from "./productActions";

const initialState = {
  productDetails: [],
  recommendedProducts: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return setProperty(state, "productDetails", payload);
    default:
      return state;
  }
};

export default productReducer;
