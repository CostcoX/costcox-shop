import { combineReducers } from "redux";
import globalReducer from "./global/globalReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
});

export default rootReducer;
