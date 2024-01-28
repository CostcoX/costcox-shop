import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import * as globalActions from "../reducers/global/globalActions";
import { getAllCategories } from "../reducers/products/productActions";
import { from, of } from "rxjs";

export const loadInitialStateEpic = (action$) => {
  return action$.pipe(
    ofType(globalActions.LOAD_INITIAL_STATE),
    mergeMap(({ type, payload }) => {
      return of(getAllCategories());
    })
  );
};

export default combineEpics(loadInitialStateEpic);
