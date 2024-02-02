import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers/rootReducer";
import rootEpic from "./epics/rootEpic";

const isBrowser = typeof window !== "undefined";

const composeEnhancers =
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
