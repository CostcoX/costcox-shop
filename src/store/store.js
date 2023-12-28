import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";

const isBrowser = typeof window !== "undefined";

const composeEnhancers =
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
