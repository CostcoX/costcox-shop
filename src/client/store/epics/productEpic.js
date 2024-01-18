import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { from } from "rxjs";
import * as productActions from "../reducers/products/productActions";

export const getAllProductsEpic = (action$) => {
  return action$.pipe(
    ofType(productActions.GET_ALL_PRODUCTS),
    mergeMap(({ type, payload }) => {
      console.log("getAllProductsEpic called");
      return from([]);
    })
  );
};

export default combineEpics(getAllProductsEpic);
